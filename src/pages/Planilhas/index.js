import "./planilhas.css";
import Header from "../../components/Header";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebaseConnections'
import { doc, collection, setDoc, getDocs} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid'; // gerar IDs únicos
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


function Planilhas() {
   const [ mostrarJanela, setMostrarJanela ] = useState(false);
   const [ planilhas, setPlanilhas ] = useState([]);
   const navigate = useNavigate();
   
   useEffect(()=>{
      const recentes = async () => {
         const docsRef = collection(db, 'planilha');
         try {
            const docSnapshot = await getDocs(docsRef);
            const recentes = docSnapshot.docs;
            setPlanilhas(recentes);
         } catch(error) {
            console.error(error);
         }
      };
      recentes();
   }, []);


//       adicionar nova planilha
   async function abrirDoc() {
      const tituloInput = document.querySelector('.add-titulo input');
      let docId = tituloInput.value.trim() || `planilha sem nome:${uuidv4()}`
      try {
         await setDoc(doc(db, 'planilha', docId), {});
         const docsRef = collection(db, 'planilha');
         const docSnapshot = await getDocs(docsRef);
         setPlanilhas(docSnapshot.docs);
         navigate(`/planilhas/tabela/${docId}`);
      } catch (error) {
         console.error('Erro ao adicionar planilha ao banco de dados: ' + error);
      }
   }
   

   function abrirRecente(id) {
      navigate(`/planilhas/tabela/${id}`); 
   }
   
   function newAnual() {
      const id = uuidv4();
      navigate(`/anual/${id}`);
   }
   
      
      return (
      <div>
         <Header />
         <div className="docs-background">
            {mostrarJanela && (
               <div className="add-titulo-container">
                  <div className="add-titulo">
                     <h2> Dê um título à sua planilha: </h2>
                     <input type="text" autoFocus></input>
                     <button className="acessar-planilha" onClick={() => { abrirDoc(); setMostrarJanela(false); }}> Acessar Planilha </button>

                     <button className="fechar-janela" onClick={() => setMostrarJanela(false)}> ✖ </button>
                  </div>
               </div>
            )}

               <section className="intro-docs">
                  <h1>Planilhas</h1>
                  <span>Iniciar uma nova planilha</span>
                  
                  <article className="docs-container">

                  <div>
                     <div className="new-doc" onClick={() => setMostrarJanela(true)} >
                        <img src={require("../../assets/icons/plus.png")} alt="Adicionar planilha" />
                     </div>
                     <span>Planilha em branco</span>
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
                  <h2>Planilhas recentes</h2>
                  <div className="recentes-container">
                  {planilhas !== null && planilhas.map( (doc) => {
                        return(
                           <div className="doc-recente" onClick={() => abrirRecente(doc.id)}>
                              <EditRoundedIcon/>
                              <span>{doc.id.startsWith('planilha sem nome') ? 'Planilha sem nome' : doc.id}</span>
                           </div>
                        )
                     })}
                  </div>
                  <div>
                     {planilhas.length === 0 && 
                        <span>Nenhuma planilha criada ainda!</span>
                     }
                  </div>
               </section>
               
         </div>
      </div>
   );
}
export default Planilhas;
