import express from 'express';
import { documentToJson, completeTask } from './services';

const handler: express.RequestHandler = async req => {
  const { taskId } = req.params;
  const task = await completeTask(taskId);

  return documentToJson(task);
};

export default {
  route: '/:taskId/complete',
  handler
};
