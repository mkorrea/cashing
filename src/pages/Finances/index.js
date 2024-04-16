import Header from "../../components/Header";
import FixedSheet from "./FixedSheet";
import NewSheet from "./NewSheet";
import "./finances.css";

function Finances() {
   return (
      <div>
         <Header />
         <main className="sheets-section">
            <div className="sheets-background">
               <img src={require("../../images/trees-bg.jpg")} alt="imagem" />

               <section className="finances-title-section">
                  <h1> Minhas Finanças </h1>
               </section>
               <NewSheet />
               
               <div>

               </div>
            </div>
         </main>
      </div>
   );
}

export default Finances;
