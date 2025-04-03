import { Router } from 'express';
import authRoutes from './auth-routes.js'; // Add `.js`
import apiRoutes from './api/index.js'; // Add `.js`
import authenticateJWT from '../middleware/authenticateJWT.js'; // Add `.js`

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateJWT, apiRoutes);

export default router;
