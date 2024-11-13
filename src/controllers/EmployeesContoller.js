const employeesModel = require('../models/EmployeesModel');

const getEmployeesContoller = async (req, res) => {
  try {
    const employees = await employeesModel.getEmployeesModel();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching employees' });
  }
};

module.exports = {
  getEmployeesContoller
};
