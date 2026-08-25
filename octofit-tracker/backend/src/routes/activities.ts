import { Router } from 'express';
import { Activity } from '../models/activity.js';

const router = Router();

router.get('/', async (_request, response) => {
  const items = await Activity.find().populate('user', 'name email avatar').sort({ completedAt: -1 }).lean();
  response.json({ resource: 'activities', persisted: true, items });
});

export default router;