import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import router from './router';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export async function init() {
  await connectDatabase();
}

export default app;
