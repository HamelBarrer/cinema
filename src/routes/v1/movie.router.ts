import { Router } from 'express';
import {
  checkShowView,
  createMovie,
  getMovies,
  getNoveltyMovie,
} from '../../controllers/movie.controller';

const router = Router();

router.get('/', getMovies);
router.get('/novelty_movies', getNoveltyMovie);
router.post('/:movieId', checkShowView);
router.post('/', createMovie);

export default router;
