import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../../pages/Register/UserContext";
import { PersonRounded } from "@mui/icons-material";

function Menu() {
   const [active, setActive] = useState(null);
   const location = useLocation();
   const { user } = useContext(UserContext);

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
            <Link to="/">  Início   <div className="bar"> </div> </Link>
         </li>

         <li className={active === "finances" ? "active" : ""}>
            <Link to="/planilhas">  Planilhas   <div className="bar"> </div> </Link>
         </li>

         <li className="settings"> <PersonRounded/> </li>

            <h3>
               {user.name}
            </h3>
        
      </ul>
   );
}

export default Menu;
