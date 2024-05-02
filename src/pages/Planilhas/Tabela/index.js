import "./tabela.css";
import Header from "../../../components/Header";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConnections";
import { doc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc,} from "firebase/firestore";
import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Tabela() {
   const [ linhas, setLinhas ] = useState([]);
   const { idDaPlanilha } = useParams();
   const [ loading, setLoading ] = useState(true)

   useEffect(() => {
      const carregarDados = async () => {
         try {
            const planilhaRef = doc(db, 'planilha', idDaPlanilha);
            const querySnapshot = await getDocs(collection(planilhaRef, 'tabela'));
            const linhasData = querySnapshot.docs.map(doc => ({
               id: doc.id,
               ...doc.data(),
            }));
            linhasData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            setLinhas(linhasData);

            // Definir o estado de loading como falso após 500ms (meio segundo)
            setTimeout(() => {
               setLoading(false);
            }, 400);
         } catch (error) {
            console.error('Erro ao carregar dados:', error);
         }
      };
      carregarDados();
   }, [idDaPlanilha]);

   if(loading) {
      return(
         <div className="tabela">
            <Header/>
            <div className="loading">
               <img src={require('../../../assets/icons/logo-main-color.png')} alt="loading"/>
            </div>
         </div>
      )
    }

   const adicionarLinha = async () => {
      const timestamp = new Date().toISOString();
      try {
         const planilhaRef = doc(db, 'planilha', idDaPlanilha);
         const tabelaRef = collection(planilhaRef, 'tabela');
         const novaLinhaRef = await addDoc(tabelaRef, {
               data: "",
               descricao: "",
               categoria: "",
               valor: "",
               status: "",
               timestamp,
         });
         if (novaLinhaRef) {
               setLinhas(prevLinhas => [...prevLinhas, { id: novaLinhaRef.id, ...novaLinhaRef.data }]);
         }
      } catch (error) {
         console.error("Erro ao adicionar nova linha:", error);
      }
   }

   const removerLinha = async (id) => {
      try {
         const novasLinhas = linhas.filter(linha => linha.id !== id);
         setLinhas(novasLinhas);
         const linhaRef = doc(db, 'planilha', idDaPlanilha, 'tabela', id);
         await deleteDoc(linhaRef);
      } catch (error) {
         console.error('Erro ao excluir linha do Firestore:', error);
      }
   };

   const handleChange = async (index, field, value) => {
      const linhaAtualizada = { ...linhas[index], [field]: value };
      const novasLinhas = [...linhas];
      novasLinhas[index] = linhaAtualizada;
      setLinhas(novasLinhas);
      try {
         const docRef = doc(db, "planilha", idDaPlanilha, "tabela", linhaAtualizada.id);
         await updateDoc(docRef, { [field]: value });
      } catch (error) {
         console.error("Erro ao atualizar linha no Firestore:", error);
      }
   };
       
       //         Adicionar api unsplash - adicionar id da foto que usuario escolher no banco de dados





   return (
         <div className="tabela">
            <Header />

            <div className="tabela-container">
               <table>
                  <thead>
                     <tr className="linha-container">
                        <th className="data"> Data </th>
                        <th className="descricao"> Descrição </th>
                        <th className="categoria"> Categoria </th>
                        <th className="valor"> Valor </th>
                        <th className="status"> Status </th>
                     </tr>
                  </thead>
                  <tbody>
                     {linhas.map((linha, index) => {
                        return (
                           <tr key={linha.id} className="linha-container">
                              <td>
                                 <input
                                    type="text"
                                    value={linha.data}
                                    className="data"
                                    onChange={(e) => handleChange(index, "data", e.target.value)}
                                 />
                              </td>
                              <td>
                                 <input
                                    type="text"
                                    value={linha.descricao}
                                    className="descricao"
                                    onChange={(e) => handleChange( index,"descricao", e.target.value)}
                                 />
                              </td>
                              <td>
                                 <select className={linha.categoria === 'pago' ? 'categoria pago' : 'categoria a-pagar'} value={linha.categoria} onChange={(e) => handleChange( index, "categoria", e.target.value )}>
                                    <option disabled hidden value=''> </option>
                                       <optgroup label="Gastos">
                                          <option className="gastos" value='assinatura'> Assinatura </option>
                                          <option className="gastos" value='assinatura'> Compra online </option>
                                          <option className="gastos" value='assinatura'> Transporte </option>

                                          <option className="gastos" value='assinatura'> Outros </option>
                                       </optgroup>
                                       <optgroup label="Ganhos">
                                          <option className="ganhos" value=''> Salário </option>
                                       </optgroup>
                                 </select>
                              </td>
                              <td>
                                 <input
                                    type="number"
                                    value={linha.valor}
                                    className="valor"
                                    onChange={(e) => handleChange(index, "valor", e.target.value)
                                    }
                                 />
                              </td>
                              <td>
                                 <select className={linha.status === 'pago' ? 'status pago' : 'status a-pagar'} value={linha.status || ""} onChange={(e) => handleChange(index, "status", e.target.value)}>
                                    <option disabled hidden value=''> </option>
                                    <option className="pago" value='pago'> Pago </option>
                                    <option className="a-pagar" value='a pagar'> A pagar </option>
                                 </select>
                                 <IconButton
                                    onClick={() => removerLinha(linha.id)}
                                    aria-label="Remover linha"
                                 >
                                    <DeleteOutlineRoundedIcon className="delete-outline-icon" />{" "}
                                    <DeleteRoundedIcon className="delete-icon" />{" "}
                                 </IconButton>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
               <div className="tabela-menu">
                  <button onClick={adicionarLinha}>Adicionar linha</button>
               </div>
            </div>
         </div>
   );
}

export default Tabela;
