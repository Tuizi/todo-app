import express from 'express';
import { getTask } from './services';

const handler: express.RequestHandler = async req => {
  const { taskId } = req.params;

  return getTask(taskId);
};

export default {
  route: '/:taskId',
  handler
};
