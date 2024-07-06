import React, {useContext} from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Sidebar() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className='sidebar'style={{ background: theme.background, color: theme.color }}>
      <div>
        <h2>Dashboard</h2>
      </div>
      <ul>
        <div className='links'>
          <h3>PAGES</h3>
          <Link to='/Employees' style={{color: theme.color }}>Employees</Link>
          <Link to='/Orders' style={{color: theme.color }}>Orders</Link>
        </div>
        <div className='links'>
          <h3>APPS</h3>
          <Link to='/Calender' style={{color: theme.color }}>Calendar</Link>
          <Link to='/Kanban' style={{color: theme.color }}>Kanban</Link>
        </div>
        <div className='links'>
          <h3>CHARTS</h3>
          <Link to='/Line' style={{color: theme.color }}>Line</Link>
          <Link to='/Area' style={{color: theme.color }}>Area</Link>
          <Link to='/Bar' style={{color: theme.color }}>Bar</Link>
          <Link to='/Pie' style={{color: theme.color }}>Pie</Link>
        </div>
      </ul>
    </div>
  );
}
