import express from 'express';
import { listTasks } from './services';

const handler: express.RequestHandler = () => {
  return listTasks();
};

export default {
  route: '/',
  handler
};
