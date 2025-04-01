import express from 'express';
import { Property } from "../models/PropertyModels"; 

const router = express.Router();

// GET /api/properties - Fetch all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch properties' });
  }
});

// GET /api/properties/:id - Fetch a property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch property' });
  }
});

export default router;

// filepath: s:\website reality\server\src\models\PropertyModels.ts
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/connectionConfig';

const Property = sequelize.define('Property', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export { Property };