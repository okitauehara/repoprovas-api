import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import router from './router';
import handleErrors from './middlewares/handleErrors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrors);

export async function init() {
  await connectDatabase();
}

export default app;
