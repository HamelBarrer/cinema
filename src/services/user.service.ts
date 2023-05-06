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

export const listShowMovies = async (userId: number) => {
  const prisma = new PrismaClient();

  const data = await prisma.users.findMany({
    where: {
      userId,
    },
    select: {
      userId: true,
      firstName: true,
      lastName: true,
      UsersOnMovies: {
        select: {
          movie: {
            select: {
              movieId: true,
              title: true,
              releaseData: true,
              movieCategory: {
                select: {
                  movieCategoryId: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return data;
};
