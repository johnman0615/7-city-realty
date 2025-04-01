import express from "express";
import { User } from "../models/UserModels";

const router = express.Router();

router.post("/login", async (req, res) => {
  if (!User) {
    return res.status(503).json({ message: "Database is disabled." });
  }

  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Add password validation logic here
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
