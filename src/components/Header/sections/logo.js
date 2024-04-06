import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    
   return (
      <section className="logo-container">
         <Link to="/">
            <img
               id="logo-img"
               src={require("../../../images/logo-icon.png")}
               alt="img"
            />
            <h1>Cashing</h1>
         </Link>
      </section>
   );
}

export default Logo;
