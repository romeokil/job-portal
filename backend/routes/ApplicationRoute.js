import express from 'express'
import { applyjob, getapplicant, getappliedjobs, updatestatus } from '../controllers/ApplicationController.js';
import { verifytoken } from '../middleware/verifyToken.js';
const router=express.Router();

router.get('/applyjob/:id',verifytoken,applyjob);
router.get('/getappliedjobs',verifytoken,getappliedjobs);
router.get('/getapplicant/:id',verifytoken,getapplicant);
router.post('/updatestatus/:id',verifytoken,updatestatus);

export default router;