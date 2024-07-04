import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

import './ChangeTheme.css';

const ChangeTheme = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  return (

      <div className={`openmenu ${isOpen ? 'open' : 'closed'}`}>
        <div className='theme-div'>
          <h1>Change Theme</h1>
          <svg 
            onClick={toggleSidebar} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512"
            style={{ cursor: 'pointer' }}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
        </div>
        <div className='theme-options'>
          <h3>Theme Options</h3>
          <input 
            type="radio" 
            id="light" 
            name="fav_theme" 
            value="light" 
 

          />
          <label htmlFor="light">Light</label><br/>
          <input 
            type="radio" 
            id="dark" 
            name="fav_theme" 
            value="dark" 

          />
          <label htmlFor="dark">Dark</label><br/>
        </div>
        <CirclePicker/>
      </div>
  );
};

export default ChangeTheme;
