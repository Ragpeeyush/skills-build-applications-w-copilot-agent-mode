import { Router } from 'express';
import { Team } from '../models/team.js';

const router = Router();

router.get('/', async (_request, response) => {
  const items = await Team.find().sort({ name: 1 }).lean();
  response.json({ resource: 'teams', persisted: true, items });
});

export default router;