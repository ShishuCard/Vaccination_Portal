import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('siteTheme') || 'light');

  useEffect(() => {
    localStorage.setItem('siteTheme', theme);
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      console.log('Theme set to dark, dark class added to <html>');
    } else {
      html.classList.remove('dark');
      console.log('Theme set to light, dark class removed from <html>');
    }
    console.log('Current <html> classList:', html.classList.value);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
