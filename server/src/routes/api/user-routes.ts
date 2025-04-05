import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { Optional } from "sequelize";
import { User } from "../../models/user";
import { authenticateJWT } from "../../middleware/auth";
import "../../types/express"; // Extends req.user type

const router = express.Router();

// Allowed user types
export const ALLOWED_USER_TYPES = ["admin", "user", "manager"] as const;
export type UserType = (typeof ALLOWED_USER_TYPES)[number];

// Interface for full User model attributes
export interface UserAttributes {
  user_id?: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  user_type: UserType;
}
// Removed redundant import of UserType

declare global {
  namespace Express {
    interface Request {
      user?: {
        user_id: number;
        user_type: UserType;
      };
    }
  }
}
// For Sequelize.create()
export type UserCreationAttributes = Optional<UserAttributes, "user_id">;

// POST /signup
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password, user_type, phone } = req.body;

    // Validate user_type
    if (!ALLOWED_USER_TYPES.includes(user_type)) {
      return res.status(400).json({
        message: `Invalid user_type. Must be one of: ${ALLOWED_USER_TYPES.join(
          ", "
        )}`,
      });
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      name,
      email,
      username: name.toLowerCase().replace(/\s+/g, ""), // Generate username from name
      password: hashedPassword,
      user_type,
    });

    // Send a safe response (no password)
    res.status(201).json({
      user_id: newUser.user_id,
      name: newUser.name,
      email: newUser.email,
      user_type: newUser.user_type,
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
});

// GET /users - only for admin
router.get("/", authenticateJWT, async (req: Request, res: Response) => {
  try {
    if (req.user?.user_type !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const users = await User.findAll({
      attributes: ["user_id", "name", "email", "user_type", "phone"],
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
});

// GET /users/:id - admin or self
router.get("/:id", authenticateJWT, async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    if (req.user?.user_type !== "admin" && req.user?.user_id !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const user = await User.findByPk(userId, {
      attributes: ["user_id", "name", "email", "user_type", "phone"],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
});
