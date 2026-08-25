import { Router } from 'express';
import { Workout } from '../models/workout.js';

const router = Router();

router.get('/', async (_request, response) => {
  const items = await Workout.find().sort({ difficulty: 1, title: 1 }).lean();
  response.json({ resource: 'workouts', persisted: true, items });
});

export default router;