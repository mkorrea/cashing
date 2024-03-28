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

               </article>
               <article className="welcome-container">

               </article>
               <div className="intro-background"></div>
            </section>

            <section className="feature-section">
               <article className="feature-section-title">
                  <h2>O que o {dados.nome} pode fazer ?</h2>
                  <p>Gerenciando financeiro e realizando sonhos!</p>
               </article>
               <article className='buttons-wrapper'>
                  <div className='feature-button'>
                     <Link to="/finances">
                        <img src={require("../../images/finances.png")} alt='img with coin'/>
                        <h2>Finances</h2>
                        <p>Mantenha o controle dos seus rendimentos. Insira suas fontes de receita e acompanhe seu progresso em direção às suas metas financeiras.</p></Link>
                  </div>
               </article>
            </section>
         </main>




         


         
         {/* <main className="container">
            <section>
               <article className="container-login">
                  <h2>Faça seu login ou registre-se!</h2>
               </article>
               <article className="container-welcome">
                  <div className="text welcome">
                     <p>
                        <strong>Bem-vindo ao Cashing!</strong>
                     </p>
                     <p>
                        Sabemos que gerenciar suas finanças pode ser desafiador,
                        mas estamos aqui para tornar isso mais simples e
                        eficiente para você. Com nossa plataforma intuitiva e
                        fácil de usar, você poderá acompanhar seus gastos e
                        ganhos financeiros de forma organizada e eficaz.
                     </p>
                  </div>
               </article>
               <div className="bg">
               </div>
            </section>

            <section className="quick-access">
               <h2>Quick Access</h2>
               <div className="blocks">
                  <div className="box">
                     <Link to="/finances">
                        <img src={require("../../images/finances.png")} />
                        <h2>Finances</h2>
                        <p>
                           Mantenha o controle dos seus rendimentos. Insira suas
                           fontes de receita e acompanhe seu progresso em
                           direção às suas metas financeiras.
                        </p>
                     </Link>
                  </div>
                  <div className="box">
                     <Link to="">
                        <img src={require("../../images/calculator.png")} />
                        <h2>Calculator</h2>
                        <p>
                           Calcule seus objetivos financeiros em segundos!
                           Descubra em quantos meses você pode alcançar sua meta
                           de economia ao juntar um determinado valor
                           mensalmente.
                        </p>
                     </Link>
                  </div>
                  <div className="box">
                     <Link to="">
                        <img src={require("../../images/gear.png")} />
                        <h2>Settings</h2>
                        <p>
                           Personalize sua experiência! Ajuste as configurações
                           do site de acordo com suas preferências individuais.
                        </p>
                     </Link>
                  </div>
               </div>
            </section>

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
            </section>
         </main> */}
      </div>
   );
}

export default Home;
