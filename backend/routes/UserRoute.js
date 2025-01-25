import express from 'express'
import { verifytoken } from '../middleware/verifyToken.js';
import { register, login, logout, updateprofile } from '../controllers/UserController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.put('/profile/update', verifytoken, updateprofile);

export default router;