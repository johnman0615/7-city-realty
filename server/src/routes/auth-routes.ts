import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User'; 
import dotenv from 'dotenv';
import { Model } from 'sequelize';

dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const DEFAULT_USERNAME = process.env.DEFAULT_USERNAME || '123';
const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD || '123';

// Define the User type
interface UserInstance extends Model {
  user_id: number;
  user_type: string;
  password: string;
}

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === process.env.DEFAULT_USERNAME && password === process.env.DEFAULT_PASSWORD) {
    res.json({ token: "dummy-token" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

export default router;

