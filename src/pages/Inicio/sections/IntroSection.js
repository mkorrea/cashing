import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Cadastro/UserContext";

function IntroSection() {
   const { user, updateUser } = useContext(UserContext);
   
   return (
      <section className="intro-section">
         <article className="login-container">
            <div className="welcome-text">
               <div>
                  Gerenciar suas finanças pode ser desafiador, mas estamos aqui
                  para tornar isso mais simples e eficiente para você.
               </div>
            </div>
         </article> 

         <article className="welcome-container">
            <img className="pc-img" src={require('../../../assets/images/pc.png')} alt="pc"/>
         </article>

         <div className="intro-background-container">
            <div className="intro-background"></div>
            {/* imagem */}
         </div>
      </section>
   );
}

export default IntroSection;
