import type { Request, Response, NextFunction } from 'express';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import apiRoutes from './api/index.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Disable caching for all API routes
router.use(
  '/api',
  (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    next();
  }
);

// Mount API routes under /api
router.use('/api', apiRoutes);

// Serve React’s index.html for all other routes
router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;