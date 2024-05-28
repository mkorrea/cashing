import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntroSection from "./sections/IntroSection";
import FeatureSection from "./sections/FeatureSection";
import "./inicio.css";
import { Link } from "react-router-dom";

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

function Inicio() {


   return (
      <div className="home">
         <Header />

         <main>
            <PerfectScrollbar className="scrollbar">
            <IntroSection />
            <FeatureSection />
            <section className="mission">
               <div className="text ">
                  <p>
                     Esqueça as planilhas complicadas e os sistemas confusos.{" "}
                     <strong> Cashing </strong> te permite registrar seus gastos
                     diários, acompanhar seus rendimentos e visualizar seus
                     hábitos de consumo de maneira clara e concisa.
                  </p>
               </div>
                  <Link to='/cadastro'>Cadastre-se</Link>
            </section>

            <section className="objetivo">
               <div className="img-effect">
                     <h2>Nossa missão é ajudá-lo a alcançar suas metas financeiras! </h2> <br/>
                     <p>
                        Com recursos personalizáveis e insights valiosos, estamos
                        aqui para ser seu parceiro no caminho para uma vida
                        financeira mais <strong>saudável e equilibrada</strong>.
                     </p>
                  </div>
               <img className="home-img" src={require('../../assets/images/pessoas.jpg')} alt="mulher" />
                  
            </section>

            <section className="faq">
               <h1>FAQ</h1>

               <div>
                  <h3>"O que é uma planilha financeira?"</h3>
                  <p> - Uma planilha financeira é uma ferramenta utilizada para organizar e gerenciar informações relacionadas às finanças pessoais ou empresariais. Ela permite registrar receitas, despesas, investimentos e outros dados financeiros de forma organizada e acessível.</p>
               </div>

               <div>
                  <h3>Por que devo usar uma planilha financeira?</h3>
                  <p>Uma planilha financeira ajuda a controlar gastos, planejar orçamentos, e monitorar o fluxo de caixa, proporcionando uma gestão financeira mais eficiente.</p>
               </div>

               <div>
                  <h3> "Como posso começar a usar o Cashing ?" </h3>
                  <p> - Faça seu <Link to='/cadastro'> cadastro</Link> e acesse nossas funcionalidades para gerenciar suas finanças! </p>
               </div>
            </section>
            </PerfectScrollbar>
         </main>

         <Footer />
      </div>
   );
}

export default Inicio;
