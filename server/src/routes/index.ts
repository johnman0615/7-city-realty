const express = require("express");
const authRoutes = require("./auth-routes");
const apiRoutes = require("./api/Index");
const authenticateJWT = require("../../middleware/authenticateJWT");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/api", authenticateJWT, apiRoutes);

// Define your routes here
router.get("/example", authenticateJWT, (req, res) => {
    res.send("API Example Route");
});

module.exports = router;
