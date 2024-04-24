import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../../pages/Cadastro/UserContext";

import Configs from "./configs";

function Menu() {
   const [active, setActive] = useState(null);
   const location = useLocation();
   const { user } = useContext(UserContext);


   useEffect(() => {
      // Verifica a localização atual e atualiza o estado ativo conforme necessário
      const pathname = location.pathname;
      if (pathname === "/") {
         setActive("home");
      } else if (pathname === "/planilhas") {
         setActive("planilhas");
      } else {
         setActive(null);
      }
   }, [location]);


   return (
      <ul className="menu">
         <li className={active === "home" ? "active" : ""}>
            <Link to="/">  Início   <div className="bar"> </div> </Link>
         </li>

         <li className={active === "planilhas" ? "active" : ""}>
            <Link to="/planilhas">  Planilhas   <div className="bar"> </div> </Link>
         </li>

         <Configs/>
        
      </ul>
   );
}

export default Menu;
