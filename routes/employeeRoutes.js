import express from 'express'
import {createEmployee,getAllEmployees,updateEmployee,deleteEmployee} from '../controllers/employeeController.js'

const router = express.Router();


router.post('/employee', createEmployee);        
router.get('/allemployee', getAllEmployees);       
router.put('/employeeUpdate/:id', updateEmployee); 
router.delete('/employeeDelete/:id', deleteEmployee);

export default router;
