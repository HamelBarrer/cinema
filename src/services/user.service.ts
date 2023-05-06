import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/user.interface';

export const readUser = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.users.findMany();

  return data;
};

export const insertUser = async (user: User) => {
  const prisma = new PrismaClient();

  const data = await prisma.users.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  return data;
};
