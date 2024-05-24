import "./planilhas.css";
import Header from "../../components/Header";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebaseConnections';
import { doc, collection, setDoc, updateDoc, onSnapshot, where, query } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function Planilhas() {
   const [mostrarJanela, setMostrarJanela] = useState(false);
   const [planilhas, setPlanilhas] = useState([]);
   const [user, setUser] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      const userDetail = localStorage.getItem("@userDetail");
      if (userDetail) {
         const data = JSON.parse(userDetail);
         setUser(data);

         const userRef = collection(db, 'planilha');
         const q = query(userRef, where('userUid', '==', data.uid));

         const unsub = onSnapshot(q, (snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
               lista.push({
                  id: doc.id,
                  ...doc.data()
               });
            });
         console.log(planilhas)
            setPlanilhas(lista);
         });

         return () => unsub();
      }
   }, []);

   // Adicionar nova planilha
   async function abrirDoc() {
      if (!user) return;

      const tituloInput = document.querySelector('.add-titulo input');
      let docId = tituloInput.value.trim() || `planilha sem nome:${uuidv4()}`;
      try {
         await setDoc(doc(db, 'planilha', docId), { userUid: user.uid });
         setPlanilhas(prev => [...prev, { id: docId, userUid: user.uid }]);
         navigate(`/planilhas/tabela/${docId}`);
      } catch (error) {
         console.error('Erro ao adicionar planilha ao banco de dados: ' + error);
      }
   }

   function abrirRecente(id) {
      navigate(`/planilhas/tabela/${id}`);
   }

   function editarPlanilha() {

      alert('Função de editar indisponível no momento.')
      // const docRef = doc(db, 'planilha')

      // const tituloInput = document.querySelector('.add-titulo input');
      // let docId = tituloInput.value.trim() || `planilha sem nome:${uuidv4()}`;
      // setMostrarJanela(true)
      // try {
      //    await updateDoc(docRef, {
      //    })
      // }

   }

   function newAnual() {
      navigate(`/manutencao`);
   }

   return (
      <div>
         <Header />
         <div className="docs-background">
            {mostrarJanela && (
               <div className="add-titulo-container">
                  <div className="add-titulo">
                     <h2>Dê um título à sua planilha:</h2>
                     <input type="text" autoFocus></input>
                     <button className="acessar-planilha" onClick={() => { abrirDoc(); setMostrarJanela(false); }}>Criar Planilha</button>
                     <button className="fechar-janela" onClick={() => setMostrarJanela(false)}>✖</button>
                  </div>
               </div>
            )}

            <div className="intro-docs">
               <section>
                  <h1>Planilhas</h1>
                  <span>Iniciar uma nova planilha</span>
               
                  <article className="docs-container">
                     <div>
                        <div className="new-doc" onClick={() => setMostrarJanela(true)}>
                           <img src={require("../../assets/icons/plus.png")} alt="Adicionar planilha" />
                        </div>
                        <span>Planilha em branco</span>
                     </div>
                     <div>
                        <div className="new-doc" onClick={newAnual}>
                           <CalendarMonthOutlinedIcon />
                        </div>
                        <span>Anual</span>
                     </div>
                  </article>
               </section>
            </div>

            <section className="recent">
               <h2>Planilhas recentes</h2>
               <div className="recentes-container">
                  {planilhas.length > 0 ? planilhas.map((doc) => (
                     <div key={doc.id} className="doc-recente" onClick={() => abrirRecente(doc.id)}>
                        <EditRoundedIcon onClick={editarPlanilha} />
                        <span>{doc.id.startsWith('planilha sem nome') ? 'Planilha sem nome' : doc.id}</span>
                     </div>
                  )) : (
                     <span>Nenhuma planilha criada ainda!</span>
                  )}
               </div>
            </section>
         </div>
      </div>
   );
}

export default Planilhas;
