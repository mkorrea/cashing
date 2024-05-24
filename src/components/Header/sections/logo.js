import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContexts";

function Logo() {
   const { darkMode, toggleDarkMode } = useTheme(); 
    
   return (
      <section className="logo-container">
         <Link to="/">
            <div className={ !darkMode ? "img" : 'img main-color'}></div>
            <h1>Cashing</h1>
         </Link>
      </section>
   );
}

export default Logo;
