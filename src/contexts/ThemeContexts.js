import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme) {
         setDarkMode(savedTheme === 'true');
         applyTheme(savedTheme === 'true');
      }
   }, []);

   const toggleDarkMode = () => {
      setDarkMode(prevMode => {
         const newMode = !prevMode;
         applyTheme(newMode);
         localStorage.setItem('darkMode', newMode);
         return newMode;
      });
   };

   const applyTheme = (isDarkMode) => {
      if (isDarkMode) {
         // modo escuro
         document.documentElement.style.setProperty('--background-primary-color', '#121214');
         document.documentElement.style.setProperty('--background-secondary-color', '#1d2125');
         document.documentElement.style.setProperty('--color-main', '#121214');
         document.documentElement.style.setProperty('--color-header-border', '#29292e');
         document.documentElement.style.setProperty('--logo-color', '#0cb3b8');
         document.documentElement.style.setProperty('--text-color', '#bbbbbb');
         document.documentElement.style.setProperty('--main-text-color', '#fff');
         document.documentElement.style.setProperty('--background-tabela', 'rgba(26, 28, 31, 0.9)');
      } else {
         // modo claro
         document.documentElement.style.setProperty('--background-primary-color', '#fff');
         document.documentElement.style.setProperty('--background-secondary-color', '#e1e8eb84');
         document.documentElement.style.setProperty('--color-main', '#0cb3b8');
         document.documentElement.style.setProperty('--color-header-border', 'transparent');
         document.documentElement.style.setProperty('--logo-color', '#fff');
         document.documentElement.style.setProperty('--text-color', '#666666');
         document.documentElement.style.setProperty('--main-text-color', '#000');
         document.documentElement.style.setProperty('--background-tabela', 'rgba(238, 243, 243, 0.9)');
      }
   };

   return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
         {children}
      </ThemeContext.Provider>
   );
};
