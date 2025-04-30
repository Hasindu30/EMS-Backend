import Department from "../models/Department.js";

export const createDepartment = async (req, res) => {
    try {
        const { depName, section, designation } = req.body;

        const newDepartment = new Department({
            depName,
            section,
            designation,
        });

        await newDepartment.save();

        res.status(201).json({
            message: "Department created successfully",
            department: newDepartment,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create department",
            error: error.message,
        });
    }
};
export const getAllDepartments = async (req, res) => {
    try {
      const { search } = req.query;
      let query = {};
  
      if (search) {
        const searchRegex = new RegExp(search, 'i'); // 'i' = case-insensitive
        query = {
          $or: [
            { depName: { $regex: searchRegex } },
            
          ],
        };
      }
  
      const departments = await Department.find(query).sort({ createdAt: -1 });
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch departments", error: error.message });
    }
  };

  export const updateDepartment = async (req, res) => {
      try {
        const { id } = req.params;
    
        const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, {
          new: true, 
          runValidators: true, 
        });
    
        if (!updatedDepartment) {
          return res.status(404).json({ message: 'Department not found' });
        }
    
        res.status(200).json({ message: 'department updated successfully', department: updatedDepartment });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update department', error: error.message });
      }
    };

    export const deleteDepartment = async (req, res) => {
      try {
        const { id } = req.params;
    
        const deletedDepartment = await Department.findByIdAndDelete(id);
    
        if (!deletedDepartment) {
          return res.status(404).json({ message: 'Department not found' });
        }
    
        res.status(200).json({ message: 'Department deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete Department', error: error.message });
      }
    };