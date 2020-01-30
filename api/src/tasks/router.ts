import express from 'express';
import get from './get';
import create from './create';
import list from './list';
import withResponseController from '../api/response-controller';

const router = express.Router();

router.get(get.route, withResponseController(get.handler));
router.get(list.route, withResponseController(list.handler));

router.post(create.route, withResponseController(create.handler));

export default router;
