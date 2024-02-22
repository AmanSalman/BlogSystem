import { Router } from "express";
import * as authController from './auth.controller.js';
const router = Router({caseSensitive:true});

router.get('/', authController.GetAuth);
router.post('/register', authController.register);
router.post("/login", authController.login);
router.delete('/:id', authController.destroy )
router.put('/:id', authController.update);
export default router;