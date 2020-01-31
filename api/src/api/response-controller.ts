import express from 'express';

const withResponseController = (
  requestToControl: express.RequestHandler
) => async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const response = await requestToControl(req, res, next);
    return res.status(200).json({ data: response });
  } catch (err) {
    // TODO: if production, don't return the real message
    return res.status(500).json({
      errors: [err.message]
    });
  }
};

export default withResponseController;
