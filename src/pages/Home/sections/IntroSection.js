import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Register/UserContext";

function IntroSection() {
   const [input, setInput] = useState('');
   const { user, updateUser } = useContext(UserContext);
   
   return (
      <section className="intro-section">
         <article className="login-container">
            <h2>Faça seu Cadastro</h2>
            <div className="login-input-container">
               <input
                  type="email"
                  placeholder="Seu email"
                  value={user.email}
                  onChange={(e) => updateUser({ ...user, email: e.target.value })}
               />
               <Link to="/cadastro" className="button">
                  Criar conta
               </Link>
            </div>
         </article>

         <article className="welcome-container">
            <div className="welcome-text">
               <div>
                  Gerenciar suas finanças pode ser desafiador, mas estamos aqui
                  para tornar isso mais simples e eficiente para você.
               </div>
            </div>
         </article>

         <div className="intro-background-container">
            <div className="intro-background"></div>
            {/* imagem */}
         </div>
      </section>
   );
}

export default IntroSection;
