import { Router } from 'express';
import {
  checkShowView,
  createMovie,
  getNoveltyMovie,
} from '../../controllers/movie.controller';

const router = Router();

router.get('/', getNoveltyMovie);
router.post('/:movieId', checkShowView);
router.post('/', createMovie);

export default router;
