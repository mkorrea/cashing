import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
   const [active, setActive] = useState(null);
   const location = useLocation();

   useEffect(() => {
      // Verifica a localização atual e atualiza o estado ativo conforme necessário
      const pathname = location.pathname;
      if (pathname === "/") {
         setActive("home");
      } else if (pathname === "/finances") {
         setActive("finances");
      } else {
         setActive(null);
      }
   }, [location]);

   return (
      <ul className="menu">
         <li className={active === "home" ? "active" : ""}>
            <Link to="/">Home</Link>
         </li>
         <li className={active === "finances" ? "active" : ""}>
            <Link to="/finances">Finances</Link>
         </li>
      </ul>
   );
}

export default Menu;
