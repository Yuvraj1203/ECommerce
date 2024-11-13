import express from 'express';
import {loginController, registerController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

//Register Route
router.post("/register",registerController);

//login
router.post("/login",loginController);

//verify token
router.get("/test",requireSignIn,isAdmin,testController)

export default router