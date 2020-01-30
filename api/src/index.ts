import express from 'express';
import tasksRouter from './tasks/router';

const app = express();
const port = 6000;

app.use('/tasks', tasksRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
