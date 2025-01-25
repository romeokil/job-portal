import express from 'express';
import { createJob, getAdminJob, getAllJobs, getJobById } from '../controllers/JobController.js';
import { verifytoken } from '../middleware/verifyToken.js';
const router=express.Router();

router.post('/createjob',verifytoken,createJob);
router.get('/getalljobs',verifytoken,getAllJobs);
router.get('/getjobbyid/:id',verifytoken,getJobById);
router.get('/getadminjob',verifytoken,getAdminJob);

export default router;