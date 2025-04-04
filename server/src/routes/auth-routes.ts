import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const DEFAULT_USERNAME = process.env.DEFAULT_USERNAME || "123";
const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD || "123";

router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

export default router;

