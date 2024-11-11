import { Router } from "express";
import { loginUsers, registerUsers } from "../Controllers/usersController.js";

const router = Router();

//registro
router.post('/register', registerUsers)
//login
router.post('/login', loginUsers)

export default router;