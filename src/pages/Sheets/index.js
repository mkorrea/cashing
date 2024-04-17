import { Link } from "react-router-dom";

import Header from "../../components/Header";
import "./sheets.css";

function Sheets() {
   return (
      <div>
         <Header />
         <div className="docs-background">
            
               <section className="intro-docs">
                  <h1>Planilhas</h1>
                  <span>Inicie seu projeto</span>
                  
                  <article className="docs-container">
                     <Link to={"/financas"} className="new-doc">
                        <img
                           src={require("../../images/plus.png")}
                           alt="Adicionar planilha"
                        />
                     </Link>
                  </article>
               </section>

               <section className="recent">
                  <h2>Recentes</h2>
                  <div>
                     <span>Nenhuma planilha criada ainda!</span>
                  </div>
               </section>
               
         </div>
      </div>
   );
}
export default Sheets;
