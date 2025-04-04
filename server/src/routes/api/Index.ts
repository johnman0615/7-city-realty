const express = require("express");
const propertyRoutes = require("./property-routes");
const authenticateJWT = require("../../middleware/authenticateJWT");

const router = express.Router();

router.use("/properties", authenticateJWT, propertyRoutes);

module.exports = router;
