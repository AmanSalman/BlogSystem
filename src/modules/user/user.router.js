import * as UserController from './user.controller.js';
import { Router } from 'express';

const router = Router ();
router.get('/', UserController.GetUser);

export default router;
