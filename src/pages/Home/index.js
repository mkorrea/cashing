import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./home.css";

function Home() {
   return (
      <div>
         <Header />

         <div className="container">
            <div className="quick-access">
               <h2>Quick Access</h2>
               <div className="blocks">
                  <div className="box">
                     <Link to="/finances">
                        📖<p>Finances</p>
                     </Link>
                  </div>
                  <div className="box">
                     <Link to="">
                        ⚙️<p>Settings</p>
                     </Link>
                  </div>
                  <div className="box"></div>
                  <div className="box"></div>
               </div>
            </div>
            <div className="text">
               <div className="text welcome">
                  <p>
                     <strong>Bem-vindo ao Cashing!</strong>
                  </p>
                  <p>
                     Sabemos que gerenciar suas finanças pode ser desafiador,
                     mas estamos aqui para tornar isso mais simples e eficiente
                     para você. Com nossa plataforma intuitiva e fácil de usar,
                     você poderá acompanhar seus gastos e ganhos financeiros de
                     forma organizada e eficaz.
                  </p>
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
            </div>
         </div>
      </div>
   );
}

export default Home;
