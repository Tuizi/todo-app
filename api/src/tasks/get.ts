import express from 'express';
import { getTask } from './services';

const handler: express.RequestHandler = req => {
  const { taskId } = req.params;

  return getTask(taskId);
};

export default {
  route: '/:taskId',
  handler
};
