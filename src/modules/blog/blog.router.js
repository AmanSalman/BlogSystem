import * as BlogController from './blog.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/getBlog', BlogController.GetBlog);
router.post('/addBlog', BlogController.addBlog);

export default router;
