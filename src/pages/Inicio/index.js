import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntroSection from "./sections/IntroSection";
import FeatureSection from "./sections/FeatureSection";
import "./inicio.css";

function Inicio() {


   return (
      <div>
         <Header />

         <main>
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

         <Footer />
      </div>
   );
}

export default Inicio;
