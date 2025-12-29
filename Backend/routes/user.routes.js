import { Router } from "express";
import { Register, Login, AdminLogin, Logout  } from '../controllers/userController.js'

const router = Router();

router.post('/register' , Register);
router.post('/login' , Login);
router.post('/admin/login' , AdminLogin);
router.post('/logout' , Logout);    




export default router;