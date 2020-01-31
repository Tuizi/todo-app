import express from 'express';
import { createTask, documentToJson } from './services';

const handler: express.RequestHandler = async req => {
  const text = req.body.data;
  const task = await createTask(text);

  return documentToJson(task);
};

export default {
  route: '/',
  handler
};
