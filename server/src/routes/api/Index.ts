import { Router } from 'express';
import propertyRoutes from "./property-routes.js"; // Add `.js`
import authenticateJWT from "../../middleware/authenticateJWT.js"; // Add `.js"

const router = Router();

router.use('/properties', authenticateJWT, propertyRoutes);

export default router;
