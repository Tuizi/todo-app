import express from 'express';
import { createTask } from './services';

const handler: express.RequestHandler = req => {
  const text = req.body.data;

  return createTask(text);
};

export default {
  route: '/',
  handler
};
