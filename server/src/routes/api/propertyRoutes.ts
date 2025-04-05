import express, { Request, Response, NextFunction } from 'express';
import { Property } from '../../models/Property'; // Adjust the import path as necessary

const router = express.Router();

// Middleware for handling async errors
const asyncHandler = (fn: any) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// GET /api/properties - Fetch all properties
router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const properties = await Property.findAll();
    res.json(properties);
  })
);

// GET /api/properties/:id - Fetch a property by ID
router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      res.status(404).json({ message: 'Property not found' });
      return; // Ensure all code paths return
    }
    res.json(property);
  })
);

export default router;
