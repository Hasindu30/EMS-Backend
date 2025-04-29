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
  
      const employees = await Department.find(query).sort({ createdAt: -1 });
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch departments", error: error.message });
    }
  };