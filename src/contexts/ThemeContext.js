import React, { createContext, useState, useEffect } from 'react';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    } else {
      setTheme(lightTheme);
      localStorage.setItem('theme', JSON.stringify(lightTheme));
    }
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
