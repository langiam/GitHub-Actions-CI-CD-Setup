import type { Request, Response, NextFunction } from 'express';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getRandomQuestions } from './api/index.js';  // ← our controller

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET /api/questions/random → returns an ARRAY of 10 questions
router.get(
  '/api/questions/random',
  (_req: Request, res: Response, next: NextFunction) => {
    // disable HTTP caching for this endpoint
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    next();
  },
  getRandomQuestions
);

// (If you have other API routes, you can mount them here under /api)
// e.g. router.use('/api/users', userRoutes);

//
// Serve React’s index.html for all other routes:
//
router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
