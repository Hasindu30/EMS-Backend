import Employee from '../models/Employee.js';

export const createEmployee = async (req, res) => {
  try {
    const { empCode, firstName, lastName, initialsName, contact, address } = req.body;

    const newEmployee = new Employee({
      empCode,
      firstName,
      lastName,
      initialsName,
      contact,
      address
    });

    await newEmployee.save();
    res.status(201).json({ message: "Employee created successfully", employee: newEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create employee", error: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
    try {
      const { search } = req.query;
      let query = {};
  
      if (search) {
        const searchRegex = new RegExp(search, 'i'); // 'i' = case-insensitive
        query = {
          $or: [
            { empCode: { $regex: searchRegex } },
            { firstName: { $regex: searchRegex } },
            { lastName: { $regex: searchRegex } },
          ],
        };
      }
  
      const employees = await Employee.find(query).sort({ createdAt: -1 });
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch employees", error: error.message });
    }
  };

export const updateEmployee = async (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
        new: true, 
        runValidators: true, 
      });
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update employee', error: error.message });
    }
  };

  export const deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedEmployee = await Employee.findByIdAndDelete(id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete employee', error: error.message });
    }
  };