import { Router } from 'express';
import {
  createMovie,
  getNoveltyMovie,
} from '../../controllers/movie.controller';

const router = Router();

router.get('/', getNoveltyMovie);
router.post('/', createMovie);

export default router;
