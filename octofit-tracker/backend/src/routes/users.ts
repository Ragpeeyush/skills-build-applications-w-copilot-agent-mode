import { Router } from 'express';
import { User } from '../models/user.js';

const router = Router();

router.get('/', async (_request, response) => {
  const items = await User.find().populate('team', 'name motto color').sort({ name: 1 }).lean();
  response.json({ resource: 'users', persisted: true, items });
});

export default router;