import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./home.css";

function Home() {
   const [dados, setDados] = useState({
      nome: 'Cashing',
   })
   
   return (
      <div>
         <Header />

         <main>
            <section className="intro-section">
               <article className="login-container">
                  <h2>Faça seu Cadastro ou login!</h2>
                  <input type='email' value='Seu email' />
               </article>

               <article className="welcome-container">
                  <div className="welcome-text">
                        <p><strong>Bem-vindo ao Cashing!</strong></p>
                        <p>
                           Sabemos que gerenciar suas finanças pode ser desafiador,
                           mas estamos aqui para tornar isso mais simples e
                           eficiente para você. Com nossa plataforma intuitiva e
                           fácil de usar, você poderá acompanhar seus gastos e
                           ganhos financeiros de forma organizada e eficaz.
                        </p>
                     </div>
               </article>

               <div className="intro-background-container">
                  <div className='intro-background'></div>
                  {/* imagem */}
               </div>
            </section>


            <section className="feature-section">
               <article className="feature-section-title">
                  <h2>O que o {dados.nome} pode fazer ?</h2>
                  <p>Gerenciando financeiro e realizando sonhos!</p>
               </article>
               <article className='buttons-wrapper'>
                  <div className='feature-button'>
                     <Link to="/finances">
                        <img src={require("../../images/finances.png")} alt='coin'/>
                        <h2>Finances</h2>
                        <p>Mantenha o controle dos seus rendimentos!</p>
                     </Link>
                  </div>
                  <div className='feature-button'>
                     <Link to="/finances">
                     <img src={require("../../images/calculator.png")} alt='calculator'/>
                        <h2>Calculator</h2>
                        <p>Calcule seus objetivos financeiros!</p>
                     </Link>
                  </div>
                  <div className='feature-button'>
                     <Link to="/finances">
                     <img src={require("../../images/gear.png")} alt='settings'/>
                        <h2>Settings</h2>
                        <p>Ajuste e personalize sua experiência!</p>
                     </Link>
                  </div>
               </article>
            </section>

            <section className='mission'>
         <div className="text ">
            <p>
               Esqueça as planilhas complicadas e os sistemas confusos.{" "}
               <strong> Cashing </strong> te permite registrar seus gastos
               diários, acompanhar seus rendimentos e visualizar seus
               hábitos de consumo de maneira clara e concisa.
            </p>
            <p>
               Nossa missão é ajudá-lo a alcançar suas metas financeiras,
               seja economizar para uma viagem dos sonhos, pagar dívidas
               ou simplesmente ter um controle melhor sobre seu dinheiro.
               Com recursos personalizáveis e insights valiosos, estamos
               aqui para ser seu parceiro no caminho para uma vida
               financeira mais saudável e equilibrada.
            </p>
         </div>

            </section>
         </main>


         
         {/* 
            <section className="text">
               <div className="text ">
                  <p>
                     Esqueça as planilhas complicadas e os sistemas confusos.{" "}
                     <strong> Cashing </strong> te permite registrar seus gastos
                     diários, acompanhar seus rendimentos e visualizar seus
                     hábitos de consumo de maneira clara e concisa.
                  </p>
                  <p>
                     Nossa missão é ajudá-lo a alcançar suas metas financeiras,
                     seja economizar para uma viagem dos sonhos, pagar dívidas
                     ou simplesmente ter um controle melhor sobre seu dinheiro.
                     Com recursos personalizáveis e insights valiosos, estamos
                     aqui para ser seu parceiro no caminho para uma vida
                     financeira mais saudável e equilibrada.
                  </p>
               </div>
*/}
      </div>
   );
}

export default Home;
