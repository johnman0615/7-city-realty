import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/Index';

import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { authenticateJWT } from "../../middleware/auth";


const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, user_type, phone } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      user_type, 
      phone,
    });

    res.status(201).json({ 
      user_id: newUser.user_id, 
      name: newUser.name, 
      email: newUser.email, 
      user_type: newUser.user_type 
    }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", authenticateJWT, async (req, res) => {
  try {
    if (req.user.user_type !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const users = await User.findAll({
      attributes: ["user_id", "name", "email", "user_type", "phone"],
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", authenticateJWT, async (req, res) => {
  try {

    const user = await User.findByPk(id);
    if (user) {
      if (username) user.username = username; // Safely update username
      if (password) user.password = password; // Safely update password
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });

    const userId = req.params.id;

    if (req.user.user_id !== parseInt(userId) && req.user.user_type !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });

    }

    const user = await User.findOne({
      where: { user_id: userId },
      attributes: ["user_id", "name", "email", "user_type", "phone"],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
