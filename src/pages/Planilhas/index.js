import "./planilhas.css";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";
import { db } from '../../firebaseConnections'
import { doc, collection, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc,} from "firebase/firestore";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { v4 as uuidv4 } from 'uuid'; // Importe a função uuidv4 para gerar IDs únicos
import { useEffect, useState } from "react";


function Planilhas() {
   const [ planilhas, setPlanilhas ] = useState([])
   const navigate = useNavigate();
   
   useEffect(()=>{
      const recentes = async () => {
         const docsRef = collection(db, 'planilha')
         try {
            const docSnapshot = await getDocs(docsRef)
            const recentes = docSnapshot.docs
            setPlanilhas(recentes)
         } catch(error) {
            console.error(error)
         }
      }
      recentes()
   })

   
   async function newDoc() {
      const id = uuidv4(); // Gerar ID aleatório usando uuidv4
      try {
         const docRef = await setDoc(doc(db, 'planilha', id), { })
         setPlanilhas(docRef)
      } catch (error) {
         console.error('erro ao adicionar planilha ao banco de dados: ' + error)
      }
      
      navigate(`/planilhas/tabela/${id}`); 
   }
   
   function openDoc(id) {
      navigate(`/planilhas/tabela/${id}`); 
   }
   
   function newAnual() {
      const id = uuidv4(); // Gerar ID aleatório usando uuidv4
      navigate(`/anual/${id}`);
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
                           <img src={require("../../assets/icons/plus.png")} alt="Adicionar planilha" />
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
                  {planilhas.map( (doc) => {
                     return(
                        <div >
                           <div className="doc-recent" onClick={openDoc(doc.id)}>
                              <img src={require("../../assets/icons/plus.png")} alt="Adicionar planilha"/>
                           </div>
                        </div>
                     )
                  })}
                  <div>
                     <span>Nenhuma planilha criada ainda!</span>
                  </div>
               </section>
               
         </div>
      </div>
   );
}
export default Planilhas;
