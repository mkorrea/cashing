import Menu from "./sections/menu.js";
import Logo from "./sections/logo.js";
import "./header.css";
import { List } from "phosphor-react";
import { useEffect, useState } from "react";

function Header( ) {

   const [ sideMenu, setSideMenu ] = useState(false)

   const openSideMenu = () => {
      setSideMenu(!sideMenu);
   };

   useEffect(() => {
      const handleClickOutside = (event) => {
         const menuContainer = document.querySelector(".menu-lateral");
         if (menuContainer && !menuContainer.contains(event.target)) {
            setSideMenu(false);
         }
      };

      if (sideMenu) {
         document.addEventListener("mousedown", handleClickOutside);
      } else {
         document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [sideMenu]);

   return (
      <div>
         {/* menu lateral mobile */}
          <div className={ sideMenu ? "menu-lateral" : "menu-lateral fechado" }> 
             <Menu/>
         </div> 
         <header>
            <List 
               onClick={openSideMenu} 
               className="menu-icon"
               size={30}
            />
            <Logo />
            <Menu />
         </header>
      </div>
   )
}

export default Header;
