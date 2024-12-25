import React, { useState, useContext } from 'react';
import { CirclePicker } from 'react-color';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ChangeTheme.css';
import darkTheme from '../../themes/darkTheme';
import lightTheme from '../../themes/lightTheme';

const ChangeTheme = ({ onClose }) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value === 'dark' ? darkTheme : lightTheme;
    updateTheme(selectedTheme);
  };

  const handleColorChange = (color) => {
    updateTheme({
      ...theme,
      color: color.hex,
    });
  };

  return (
    <div className={`openmenu closed`} style={{ background: theme.background }}>
      <div className='theme-div'>
        <h1 style={{ color: theme.color }}>Change Theme</h1>
        <svg 
          onClick={onClose} // This will call the onClose prop to close the sidebar
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 384 512"
          style={{ cursor: 'pointer', fill: theme.color }}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </div>
      <div className='theme-options'>
        <h3 style={{ color: theme.color }}>Theme Options</h3>
        <input 
          type="radio" 
          id="light" 
          name="fav_theme" 
          value="light" 
          checked={theme === lightTheme}
          onChange={handleThemeChange}
        />
        <label htmlFor="light" style={{ color: theme.color }}>Light</label><br/>
        <input 
          type="radio" 
          id="dark" 
          name="fav_theme" 
          value="dark" 
          checked={theme === darkTheme}
          onChange={handleThemeChange}
        />
        <label htmlFor="dark" style={{ color: theme.color }}>Dark</label><br/>
      </div>
      <CirclePicker onChange={handleColorChange} />
    </div>
  );
};

export default ChangeTheme;
