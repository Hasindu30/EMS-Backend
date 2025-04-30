import express from 'express'
import { createDepartment, deleteDepartment, getAllDepartments, updateDepartment } from '../controllers/departmentController.js'

const router = express.Router();

router.post('/department',createDepartment);
router.get('/alldepartments', getAllDepartments);  
router.put('/departmentupdate/:id', updateDepartment); 
router.delete('/departmentdelete/:id', deleteDepartment);
export default router;