import { Router } from 'express';
import {
  createMovieCategory,
  getMovieCategories,
} from '../../controllers/movieCategory.controller';

const router = Router();

router.get('/', getMovieCategories);
router.post('/', createMovieCategory);

export default router;
