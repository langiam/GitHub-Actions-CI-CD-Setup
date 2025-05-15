import type { Request, Response, NextFunction } from 'express';
import express from 'express';
const router = express.Router();

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import apiRoutes from './api/index.js';

// Disable caching for the random question API
router.use(
  '/api/questions/random',
  (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    next();
  }
);

// Mount API routes
router.use('/api', apiRoutes);

// Serve React front-end in production
router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
