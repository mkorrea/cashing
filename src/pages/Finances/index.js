import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./finances.css";

function Finances() {
   return (
      <div>
         <Header />
         <main>
            <section className="title-section">
               <h1 className="title"> Finances </h1>
            </section>

            <section className="sheets-section">
               <div className="sheets-background">
                  <div className="main-sheet">
                    
                     <div className="sheet-row">
                        <input type="text" className="description" />
                        <select className="category">
                           <option> Contas </option>
                           <option> Comida </option>
                        </select>
                        <div className="date"> 05/04</div>
                        <div className="value negative"> - R$ 500,00 </div>
                     </div>

                     <div className="sheet-row">
                        <div className="description">Salário</div>
                        <select className="category">
                           <option> Contas </option>
                           <option> Comida </option>
                        </select>
                        <div className="date"> 05/04</div>
                        <div className="value positive"> + R$ 3254,00 </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}

export default Finances;
