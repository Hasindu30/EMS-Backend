import express from 'express'
import { createDepartment, getAllDepartments } from '../controllers/departmentController.js'

const router = express.Router();

router.post('/department',createDepartment);
router.get('/alldepartments', getAllDepartments);  
export default router;