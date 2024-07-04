import React, { createContext, useState } from 'react';
import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((curr) => (curr === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


