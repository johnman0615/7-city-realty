import { Router } from 'express';
import authRoutes from './auth-routes';
import apiRoutes from './api/Index.js';
import authenticateJWT from '../middleware/authenticateJWT';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateJWT, apiRoutes);

export default router;
