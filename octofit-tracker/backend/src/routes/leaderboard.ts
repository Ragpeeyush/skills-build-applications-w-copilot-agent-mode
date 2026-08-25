import { Router } from 'express';
import { Leaderboard } from '../models/leaderboard.js';

const router = Router();

router.get('/', async (_request, response) => {
  const items = await Leaderboard.find().populate('user', 'name email avatar').sort({ rank: 1 }).lean();
  response.json({ resource: 'leaderboard', persisted: true, items });
});

export default router;