import React, { useState } from 'react';
import './Employees.css'; 
import avatar from '../../data/avatar.jpg'; 
import avatar2 from '../../data/avatar2.jpg'
import avatar3 from '../../data/avatar3.png'
import avatar4 from '../../data/avatar4.jpg'

const EmployeeSection = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', location: 'New York', photo: avatar },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', location: 'San Francisco', photo: avatar2 },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', location: 'Chicago', photo: avatar3 },
    { id: 4, name: 'Michael Brown', email: 'michael.brown@example.com', location: 'Los Angeles', photo: avatar4 },
    { id: 5, name: 'Emily Davis', email: 'emily.davis@example.com', location: 'Seattle', photo: avatar },
    { id: 6, name: 'Daniel Wilson', email: 'daniel.wilson@example.com', location: 'Boston', photo: avatar2 },
    { id: 7, name: 'Olivia Taylor', email: 'olivia.taylor@example.com', location: 'Miami', photo: avatar3 },
    { id: 8, name: 'James Lee', email: 'james.lee@example.com', location: 'Houston', photo: avatar4 },
    { id: 9, name: 'Sophia Moore', email: 'sophia.moore@example.com', location: 'Dallas', photo: avatar },
    { id: 10, name: 'William Clark', email: 'william.clark@example.com', location: 'Austin', photo: avatar2 },
    { id: 11, name: 'Ella Garcia', email: 'ella.garcia@example.com', location: 'Phoenix', photo: avatar3 },
    { id: 12, name: 'Jacob Martinez', email: 'jacob.martinez@example.com', location: 'Denver', photo: avatar4 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5; 

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const nextPage = () => {
    if (indexOfLastEmployee < employees.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const toggleSelectAll = () => {
    if (selectedEmployees.length === currentEmployees.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(currentEmployees.map((employee) => employee.id));
    }
  };

  const toggleSelectEmployee = (employeeId) => {
    if (selectedEmployees.includes(employeeId)) {
      setSelectedEmployees(selectedEmployees.filter((id) => id !== employeeId));
    } else {
      setSelectedEmployees([...selectedEmployees, employeeId]);
    }
  };

  const removeEmployee = () => {
    setEmployees(employees.filter((employee) => !selectedEmployees.includes(employee.id)));
    setSelectedEmployees([]);
  };

  return (
    <div className="employee-section-wrapper">
      <div className="employee-section">
        <h2>Employee List</h2>
        <div className="employee-grid">
          <div className="employee-grid-header">
            <div><input type="checkbox" onChange={toggleSelectAll} checked={selectedEmployees.length === currentEmployees.length && currentEmployees.length !== 0} /></div>
            <div>Photo</div>
            <div>Name</div>
            <div>Email</div>
            <div>Location</div>
            <div><button className='delete-btn' onClick={removeEmployee}>Delete Selected</button></div>
          </div>
          {currentEmployees.map((employee) => (
            <div key={employee.id} className="employee-grid-row">
              <input type="checkbox" onChange={() => toggleSelectEmployee(employee.id)} checked={selectedEmployees.includes(employee.id)} />
              <div><img src={employee.photo} alt={employee.name} className="employee-photo" /></div>
              <div>{employee.name}</div>
              <div>{employee.email}</div>
              <div>{employee.location}</div>
              <div></div> 
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <span className="page-count">Page {currentPage}</span>
            <button onClick={nextPage} disabled={indexOfLastEmployee >= employees.length}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSection;
