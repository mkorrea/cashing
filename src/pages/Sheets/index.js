import { useNavigate } from "react-router-dom";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import Header from "../../components/Header";
import "./sheets.css";

function Sheets() {
   const navigate = useNavigate()

   function newDoc() {
      // gerar id aleatorio no banco de dados
      navigate("/financas")
   }
   
   function newAnual() {
      navigate("/anual/"/* +id aleatorio do banco de dados */)
   }
   
   return (
      <div>
         <Header />
         <div className="docs-background">
            
               <section className="intro-docs">
                  <h1>Planilhas</h1>
                  <span>Iniciar um novo projeto</span>
                  
                  <article className="docs-container">
                     <div>
                        <div className="new-doc" onClick={newDoc}>
                           <img
                              src={require("../../assets/icons/plus.png")}
                              alt="Adicionar planilha"
                           />
                        </div>
                        <span>Documento em branco</span>
                     </div>

                     <div>
                        <div className="new-doc" onClick={newAnual}>
                           <CalendarMonthOutlinedIcon/>
                        </div>
                        <span>Anual</span>
                     </div>
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
