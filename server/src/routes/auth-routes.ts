import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User'; 
import dotenv from 'dotenv';
import { Model } from 'sequelize';

dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Define the User type
interface UserInstance extends Model {
  user_id: number;
  user_type: string;
  password: string;
}

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Cast the user to UserInstance after ensuring it's not null
    const userInstance = user as unknown as UserInstance;

    const isPasswordValid = await bcrypt.compare(password, userInstance.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: userInstance.user_id, user_type: userInstance.user_type },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: "An error occurred during login" });
  }
});

export default router;

