import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from '../../Register'

function IntroSection() {
   const [input, setInput] = useState('');
   
   return (
      <section className="intro-section">
         <article className="login-container">
            <h2>Faça seu Cadastro</h2>
            <div className="login-input-container">
               <input
                  type="email"
                  placeholder="Seu email"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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
<Register input={input}/>
}

export default IntroSection;
