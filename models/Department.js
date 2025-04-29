import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    depName:{
        type:String,
        required:true,
        unique:true
    },
    section:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    }
},{ timestamps: true });

const Department = mongoose.model('Department',departmentSchema);

export default Department;

