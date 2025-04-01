import express from "express";
import { Agent } from "../models/AgentModels";

const router = express.Router();

router.get("/", async (req, res) => {
  if (!Agent) {
    return res.status(503).json({ message: "Database is disabled. Agent model is not available." });
  }

  try {
    const agents = await Agent.findAll();
    res.json(agents);
  } catch (error) {
    console.error("Error fetching agents:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;