import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import tasksRouter from './tasks/router';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import './database/client';

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
