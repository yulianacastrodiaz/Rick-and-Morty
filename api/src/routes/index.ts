import {Router} from 'express';
import charactersRoutes from './characters';
const router = Router();

router.use('/characters', charactersRoutes);

export default router;