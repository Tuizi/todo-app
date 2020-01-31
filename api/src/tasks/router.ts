import express from 'express';
import create from './create';
import complete from './complete';
import list from './list';
import withResponseController from '../api/response-controller';

const router = express.Router();

router.patch(complete.route, withResponseController(complete.handler));
router.post(create.route, withResponseController(create.handler));
router.get(list.route, withResponseController(list.handler));

export default router;
