import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../../models/User"; // Ensure you have a User model defined
import Joi from "joi";
import authenticateJWT from '../../middleware/authenticateJWT'; 

const router = express.Router();

// Validation schema for user registration
const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  user_type: Joi.string().valid("buyer", "seller", "agent").required(),
  password: Joi.string().min(6).required(),
});

// POST user registration
router.post("/register", async (req: Request, res: Response) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const { name, email, phone, user_type, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use Sequelize's create method
    const user = await User.create({
      name,
      email,
      phone,
      user_type,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(500).json({ message: "An unknown error occurred" });
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  const signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    user_type: Joi.string().valid("buyer", "seller", "agent").required(),
  });

  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const { username, email, password, user_type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      user_type,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/", authenticateJWT, async (_req, res) => {
  res.json({ message: "Endpoint working" });
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
