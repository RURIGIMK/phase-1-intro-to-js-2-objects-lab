// Write your solution in this file!
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  };
  
  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
  };
  
  const deleteFromEmployeeByKey = (employee, key) => {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  };
  
  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
  };
  
  
  