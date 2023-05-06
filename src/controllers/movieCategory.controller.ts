import { Request, Response } from 'express';
import {
  insertMovieCategory,
  readMovieCategories,
} from '../services/movieCategory.service';

export const getMovieCategories = async (_: Request, res: Response) => {
  const data = await readMovieCategories();
  if (data.length === 0) return res.status(204);

  return res.status(200).json({ data });
};

export const createMovieCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ data: 'Name is required' });

  const data = await insertMovieCategory(req.body);

  return res.status(201).json({ data });
};
