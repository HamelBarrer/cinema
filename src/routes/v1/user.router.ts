import { Router } from 'express';
import { createUser, listMoviesView } from '../../controllers/user.controller';

const router = Router();

router.get('/:userId', listMoviesView);
router.post('/', createUser);

export default router;
