import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRouter from './routes/v1/user.router';
import movieCategoryRouter from './routes/v1/movieCategory.router';
import movieRouter from './routes/v1/movie.router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/movie_categories', movieCategoryRouter);
app.use('/api/v1/movies', movieRouter);

export default app;
