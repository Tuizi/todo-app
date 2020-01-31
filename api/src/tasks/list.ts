import express from 'express';
import { listTasks, documentToJson } from './services';

const handler: express.RequestHandler = async () => {
  const tasks = await listTasks();

  return tasks.map(documentToJson);
};

export default {
  route: '/',
  handler
};
