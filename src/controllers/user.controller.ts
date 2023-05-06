import { Request, Response } from 'express';
import { insertUser } from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;

  if (!firstName)
    return res.status(400).json({ data: 'First Name is required' });
  if (!lastName) return res.status(400).json({ data: 'Last Name is required' });

  const data = await insertUser(req.body);

  return res.status(200).json({ data });
};
