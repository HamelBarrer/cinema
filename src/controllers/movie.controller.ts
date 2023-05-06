import { Request, Response } from 'express';
import {
  insertMovie,
  readNoveltyMovie,
  showMovie,
} from '../services/movie.service';

export const getNoveltyMovie = async (_: Request, res: Response) => {
  const data = await readNoveltyMovie();
  if (data.length === 0) {
    return res.status(204).json();
  }

  return res.status(200).json({ data });
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { title, releaseData, movieCategoryId } = req.body;

    if (!title) return res.status(400).json({ data: 'Title is required' });
    if (!releaseData)
      return res.status(400).json({ data: 'Release Data is required' });
    if (!movieCategoryId)
      return res.status(400).json({ data: 'Movie Category Id is required' });

    const data = await insertMovie(req.body);

    return res.status(201).json({ data });
  } catch (error: any) {
    return res.status(500).json({ data: error.message });
  }
};

export const checkShowView = async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId);
  const { userId } = req.body;

  if (!userId) return res.status(400).json({ data: 'User Id is required' });

  const data = await showMovie(userId, movieId);

  return res.status(201).json({ data });
};
