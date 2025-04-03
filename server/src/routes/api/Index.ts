import { Router } from 'express';
import propertyRoutes from './property-routes';
import authenticateJWT from '../../middleware/authenticateJWT'; 

const router = Router();

router.use('/properties', authenticateJWT, propertyRoutes);

export default router;
