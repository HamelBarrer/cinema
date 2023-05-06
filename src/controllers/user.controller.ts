import { Request, Response } from 'express';
import { insertUser, listShowMovies } from '../services/user.service';

export const listMoviesView = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  const data = await listShowMovies(userId);
  if (data.length === 0) return res.status(204).json();

  return res.status(200).json({ data });
};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;

  if (!firstName)
    return res.status(400).json({ data: 'First Name is required' });
  if (!lastName) return res.status(400).json({ data: 'Last Name is required' });

  const data = await insertUser(req.body);

  return res.status(200).json({ data });
};
