import express from 'express';
import Question from '../../models/Question.js';
const router = express.Router();
// GET /api/questions/random → returns an ARRAY of 10 random questions
router.get('/random', async (_req, res) => {
    try {
        const questions = await Question.aggregate([
            { $sample: { size: 10 } },
            { $project: { __v: 0 } }
        ]);
        return res.status(200).json(questions);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
export default router;
