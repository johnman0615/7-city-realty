import express, { Request, Response } from "express";
import Property from "../../models/Property.js"; // Add `.js`
import authenticateJWT from "../../middleware/authenticateJWT.js"; // Add `.js`

const router = express.Router();

// GET all properties
router.get("/", async (_req, res: Response) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Error fetching properties" });
  }
});

// GET specific property by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    return res.json(property);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching property" });
  }
});

// POST new property listing
router.post("/", authenticateJWT, async (req: Request, res: Response) => {
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
      seller_id,
      status,
    } = req.body;

    const property = await Property.create({
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
      seller_id,
      status,
    });

    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ message: "Error creating property" });
  }
});

// DELETE property by ID
router.delete("/:id", authenticateJWT, async (req: Request, res: Response) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    await property.destroy();
    return res.json({ message: "Property deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error deleting property" });
  }
});

export default router;
