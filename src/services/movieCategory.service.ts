import { PrismaClient } from '@prisma/client';
import { MovieCategory } from '../interfaces/movieCategory.interface';

export const readMovieCategories = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.movieCategories.findMany({
    select: {
      movieCategoryId: true,
      name: true,
    },
    where: {
      isActive: true,
    },
  });

  return data;
};

export const insertMovieCategory = async (movieCategory: MovieCategory) => {
  const prisma = new PrismaClient();

  const data = await prisma.movieCategories.create({
    data: {
      name: movieCategory.name,
    },
  });

  return data;
};
