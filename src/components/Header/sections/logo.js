import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    
   return (
      <section className="logo-container">
         <Link to="/">
            {/* <img
               id="logo-img"
               src={require("../../../images/white-icon.png")}
               alt="img"
            /> */}
            <div className="img"></div>
            <h1>Cashing</h1>
         </Link>
      </section>
   );
}

export default Logo;
