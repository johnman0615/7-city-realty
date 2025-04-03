import { Router } from "express";
import Property from "../models/Property"; // Adjust the path if necessary
import { authenticateJWT } from "../middleware/auth";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", authenticateJWT, async (req, res) => {
  try {
    const {
      description,
      price,
      address,
      city,
      state,
      zip_code,
      property_type,
      bedrooms,
      bathrooms,
      square_feet,
      agent_id, 
      status,
    } = req.body;

    const newProperty = await Property.create({
      description,
      price,
      address,
      city,
      state,
      zip_code,
      property_type,
      bedrooms,
      bathrooms,
      square_feet,
      agent_id: agent_id || null, 
      seller_id: req.user.id, 
      status: status || "available",
    });

    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", authenticateJWT, async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (property.seller_id !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to edit this property" });
    }

    await property.update(req.body);
    res.json({ message: "Property updated successfully", property });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", authenticateJWT, async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (property.seller_id !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to delete this property" });
    }

    await property.destroy();
    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
