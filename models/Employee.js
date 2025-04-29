import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  empCode: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  initialsName: {     
    type: String,
    required: true,
  },
  contact: {
    type: Number,      
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
