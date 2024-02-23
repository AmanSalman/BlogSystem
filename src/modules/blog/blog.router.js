import * as BlogController from './blog.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/getBlog', BlogController.GetBlog);
router.post('/addBlog', BlogController.addBlog);
router.delete('/deleteBlog/:id', BlogController.DeleteBlog);
router.put ('/UpdateBlog/:id', BlogController.UpdateBlog)

export default router;
