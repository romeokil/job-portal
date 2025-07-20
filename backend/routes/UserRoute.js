import express from 'express'
import { verifytoken } from '../middleware/verifyToken.js';
import { singleUpload } from '../middleware/multer.js';
import { register, login, logout, updateprofile } from '../controllers/UserController.js';

const router = express.Router();

router.post('/register',singleUpload, register);
router.post('/login', login);
router.post('/logout', logout);
router.put('/profile/update', verifytoken, singleUpload, updateprofile);

export default router;