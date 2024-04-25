import "./tabela.css";
import Header from "../../../components/Header";

import { useState, useEffect } from "react";
import { db } from "../../../firebaseConnections";
import { doc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc,} from "firebase/firestore";
import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Tabela() {
   const [linhas, setLinhas] = useState([]);

   useEffect(() => {
      const carregarDados = async () => {
         try {
            const querySnapshot = await getDocs(collection(db, "tabela"));
            const linhasData = querySnapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
            }));

            // Ordena as linhas com base no timestamp
            linhasData.sort((a, b) => {
               return new Date(a.timestamp) - new Date(b.timestamp);
            });

            setLinhas(linhasData);
         } catch (error) {
            console.error("Erro ao carregar dados:", error);
         }
      };

      carregarDados();
   }, []);

   const adicionarLinha = async () => {
      try {
         const timestamp = new Date().toISOString(); // Obtém o timestamp atual
         const novaLinhaRef = await addDoc(collection(db, "tabela"), {
            data: "",
            descricao: "",
            categoria: "",
            valor: "",
            status: "",
            timestamp: timestamp, // Adiciona o timestamp ao documento
         });
         const novaLinha = {
            id: novaLinhaRef.id,
            data: "",
            descricao: "",
            categoria: "",
            valor: "",
            status: "",
            timestamp: timestamp, // Inclui o timestamp na nova linha localmente
         };
         setLinhas([...linhas, novaLinha]);
      } catch (error) {
         alert("Erro ao adicionar nova linha:", error);
      }
   };

   const removerLinha = async (id) => {
      try {
         const novasLinhas = linhas.filter((linha) => linha.id !== id);
         setLinhas(novasLinhas);

         const docRef = doc(db, "tabela", id);
         const docSnapshot = await getDoc(docRef);
         if (docSnapshot.exists()) {
            await deleteDoc(docRef);
         } else {
            console.warn("Documento não encontrado:", id);
         }
      } catch (error) {
         console.error("Erro ao excluir linha do Firestore:", error);
      }
   };

   const handleChange = async (index, field, value) => {
      // Crie uma cópia da linha atualizada
      const linhaAtualizada = { ...linhas[index], [field]: value };

      // Atualize a linha localmente
      const novasLinhas = [...linhas];
      novasLinhas[index] = linhaAtualizada;
      setLinhas(novasLinhas);

      try {
         // Atualize o documento correspondente no Firestore
         const docRef = doc(db, "tabela", linhaAtualizada.id);
         await updateDoc(docRef, {
            [field]: value,
         });
      } catch (error) {
         console.error("Erro ao atualizar linha no Firestore:", error);
      }
   };

   return (
      <div className="tabela">
         <Header />
         <div className="tabela-menu">
            <button onClick={adicionarLinha}>Adicionar linha</button>
         </div>
         <div className="tabela-container">
            <table>
               <thead>
                  <tr className="linha-container">
                     <th>Data</th>
                     <th>Descrição</th>
                     <th>Categoria</th>
                     <th>Valor</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {linhas.map((linha, index) => {
                     return (
                        <tr key={linha.id} className="linha-container">
                           <td>
                              {" "}
                              <input
                                 type="text"
                                 value={linha.data}
                                 className="input-data"
                                 onChange={(e) =>
                                    handleChange(index, "data", e.target.value)
                                 }
                              />{" "}
                           </td>
                           <td>
                              {" "}
                              <input
                                 type="text"
                                 value={linha.descricao}
                                 className="input-descricao"
                                 onChange={(e) =>
                                    handleChange(
                                       index,
                                       "descricao",
                                       e.target.value
                                    )
                                 }
                              />{" "}
                           </td>
                           <td>
                              {" "}
                              <input
                                 type="text"
                                 value={linha.categoria}
                                 className="input-categoria"
                                 onChange={(e) =>
                                    handleChange(
                                       index,
                                       "categoria",
                                       e.target.value
                                    )
                                 }
                              />{" "}
                           </td>
                           <td>
                              {" "}
                              <input
                                 type="number"
                                 value={linha.valor}
                                 className="input-valor"
                                 onChange={(e) =>
                                    handleChange(index, "valor", e.target.value)
                                 }
                              />{" "}
                           </td>
                           <td>
                              {" "}
                              <input
                                 type="text"
                                 value={linha.status}
                                 className="input-status"
                                 onChange={(e) =>
                                    handleChange(
                                       index,
                                       "status",
                                       e.target.value
                                    )
                                 }
                              />
                              <IconButton
                                 onClick={() => removerLinha(linha.id)}
                                 aria-label="Remover linha"
                              >
                                 {" "}
                                 <DeleteOutlineRoundedIcon className="delete-outline-icon" />{" "}
                                 <DeleteRoundedIcon className="delete-icon" />{" "}
                              </IconButton>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Tabela;
