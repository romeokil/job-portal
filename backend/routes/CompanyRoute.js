import express from 'express'
import { getcompany, getcompanybyid, registerCompany, updatecompanybyid } from '../controllers/CompanyController.js';
import { verifytoken } from '../middleware/verifyToken.js';
const router = express.Router();
// ab user agr authenticated hoga tbhi ye sb krne de skte hai.
// only if user is authenticated then only we will allow this operation

router.post('/register', verifytoken, registerCompany);
router.get('/getcompany', verifytoken, getcompany);
router.get('/getcompanybyid/:id', verifytoken, getcompanybyid);
router.put('/updatecompanybyid/:id', verifytoken, updatecompanybyid);

export default router;