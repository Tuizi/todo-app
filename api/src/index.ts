import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import tasksRouter from './tasks/router';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = 6000;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
