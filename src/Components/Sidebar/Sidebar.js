import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {



  return (
    <div className='sidebar'>
      <div>
        <h2>Dashboard</h2>
      </div>
      <ul>
        <div className='links'>
          <h3>PAGES</h3>
          <Link to='/Employees'>Employees</Link>
          <Link to='/Orders'>Orders</Link>
        </div>
        <div className='links'>
          <h3>APPS</h3>
          <Link to='/Calender'>Calendar</Link>
          <Link to='/Kanban'>Kanban</Link>
        </div>
        <div className='links'>
          <h3>CHARTS</h3>
          <Link to='/Line'>Line</Link>
          <Link to='/Area'>Area</Link>
          <Link to='/Bar'>Bar</Link>
          <Link to='/Pie'>Pie</Link>
        </div>
      </ul>
    </div>
  );
}
