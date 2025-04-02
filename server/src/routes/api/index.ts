import { Router } from 'express';
import authRoutes from './auth-routes.ts';
import propertyRoutes from './property-routes';
import { authenticateJWT } from '../../middleware/auth.js';


const router = Router();
router.use('/auth', authRoutes);

router.use('/properties', authenticateJWT, propertyRoutes);

export default router;
