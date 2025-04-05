import express from "express";
import { Agent } from "../models/agent";

const router = express.Router();

router.get("/", async (_, res) => {
  if (!Agent) {
    return res.status(503).json({ message: "Database is disabled. Agent model is not available." });
  }

  try {
    const agents = await Agent.findAll();
    return res.json(agents);
  } catch (error) {
    console.error("Error fetching agents:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;