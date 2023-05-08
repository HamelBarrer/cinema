import { Prisma, PrismaClient } from '@prisma/client';
import { Movie } from '../interfaces/movie.interface';
import { getThirdWeek } from '../utils/dates';

export const readMovies = async (
  title: string,
  category: string,
  order: any,
) => {
  const prisma = new PrismaClient();

  const data = await prisma.movies.findMany({
    select: {
      movieId: true,
      title: true,
      movieCategory: {
        select: {
          movieCategoryId: true,
          name: true,
        },
      },
      releaseData: true,
    },
    where: {
      title: {
        contains: title,
      },
      movieCategory: {
        name: {
          contains: category,
        },
      },
    },
    orderBy: [
      {
        releaseData: order,
      },
    ],
  });

  return data;
};

export const readNoveltyMovie = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.movies.findMany({
    where: {
      releaseData: {
        lte: getThirdWeek(),
      },
    },
  });

  return data;
};

export const insertMovie = async (movie: Movie) => {
  try {
    const prima = new PrismaClient();

    const data = await prima.movies.create({
      data: {
        title: movie.title,
        releaseData: new Date(movie.releaseData.replace('-', '/')),
        movieCategoryId: movie.movieCategoryId,
      },
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
    });

    return data;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('The title exists');
      }
      if (error.code === 'P2003') {
        throw new Error('The relation not exists');
      }
    }

    return error;
  }
};

export const showMovie = async (userId: number, movieId: number) => {
  const prisma = new PrismaClient();

  const data = await prisma.usersOnMovies.create({
    data: {
      userId,
      movieId,
      movieIsView: true,
    },
    select: {
      movie: {
        select: {
          movieId: true,
          title: true,
        },
      },
      user: {
        select: {
          userId: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  return data;
};
