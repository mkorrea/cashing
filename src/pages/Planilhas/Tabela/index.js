import "./tabela.css";
import Header from "../../../components/Header";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConnections";
import { doc, collection, addDoc, getDocs, setDoc, updateDoc, deleteDoc, getDoc,} from "firebase/firestore";
import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CollectionsIcon from '@mui/icons-material/Collections';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import api from "../../../services/api";


function Tabela() {
   const [ linhas, setLinhas ] = useState([]);
   const { idDaPlanilha } = useParams();
   const [ loading, setLoading ] = useState(true)
   const [ imagens, setImagens ] = useState([])
   const [ bgOpen, setBgOpen ] = useState(false)
   const [ background, setBackground ] = useState('')

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
            }, 100);
         } catch (error) {
            console.error('Erro ao carregar dados:', error);
         }
      };

      // carregar api de imagens Unsplash
      const carregarImagens = async () => {
         try {
            const response = await api.get('photos', {
               params: {
                  per_page: 30
               }
            })
            setImagens(response.data)
         } catch (error) {
            console.log(`Erro ao carregar imagens: ${error}`)
         }
      }

      carregarDados();
      carregarImagens()
   }, [idDaPlanilha]);

   // fechar "alterar background"
   useEffect(() => {
      function handleClickOutside(event) {
         const settingsContainer = document.querySelector(".change-bg");
         if (settingsContainer && !settingsContainer.contains(event.target)) {
            setBgOpen(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);


      // carregar background
      useEffect(()=>{
         async function loadBackground() {
            const docRef = doc(db, 'planilha', idDaPlanilha, 'tabela', 'background')
            await getDoc(docRef)
            .then((snapshot) => {
               console.log(snapshot)
               console.log(snapshot.data().background)
               setBackground(snapshot.data().background)
            })
            .catch ((error) => {
               console.log('erro ao carregar background: ' + error)
            })
         }
         loadBackground()
         
      })
      


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


   async function handleSearchChange(query) {

      if(query.length > 2) {
         try {
            const response = await api.get('search/photos', {
               params: {
                  query, 
                  per_page: 30
               }
            })
            setImagens(response.data.results)
         } catch (err) {
            console.log(err)
         }
      } else if(query.length < 2) {
         const response = await api.get('photos', {
            params: {
               per_page: 30
            }
         })
         setImagens(response.data)
      }
   }


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
       

   function handleBackgrounds() {
      if(!bgOpen) {
         setBgOpen(true)
      } else {
         setBgOpen(false)
      }
   }

   async function mudarFundo(img) {
      const docRef = doc(db, 'planilha', idDaPlanilha, 'tabela', 'background');
      await setDoc(docRef, {
         background: img
      })
      setBackground(img);
   }

   


       //         Adicionar api unsplash - adicionar id da foto que usuario escolher no banco de dados


       return (
         <div className="tabela">
            <Header />
            <img src={background || (require('../../../assets/images/bg-tabela.jpg'))} alt="img-background" />

            <CollectionsIcon className={ !bgOpen ? "bg-icon" : "bg-icon close"} onClick={handleBackgrounds}/>

            <div className= { bgOpen ? "change-bg" : "change-bg closed" }>
               <h2>Alterar plano de fundo</h2>
               <div className="search-container">
                  <input
                     className="search-image"
                     type="text"
                     placeholder="Pesquisar imagens..."
                     onChange={(e)=> handleSearchChange(e.target.value)} />
               </div>
               <PerfectScrollbar className="scrollbar">
               <div className="img-list">
                  {imagens.map((img)=>{
                     return(
                        <div key={img.id} onClick={() => mudarFundo(img.urls?.full) }>
                           <div className="img-container">
                              <img src={img.urls?.thumb} alt="imagem unsplash"/>
                              <span> <a href={img.links.html} target="_blank" rel="noreferrer"> {img.user.name}</a> </span>
                           </div>
                        </div>
                     )
                  })}
               </div>
               </PerfectScrollbar>
            </div>

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
                                    type="date"
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
                                 <select className='categoria' value={linha.categoria} onChange={(e) => handleChange( index, "categoria", e.target.value )}>
                                    <option disabled hidden value=''> </option>
                                       <optgroup label="Gastos">
                                          <option className="gastos" value='assinatura'> Assinatura </option>
                                          <option className="gastos" value='compra online'> Compra online </option>
                                          <option className="gastos" value='transporte'> Transporte </option>

                                          <option className="gastos" value='outros'> Outros </option>
                                       </optgroup>
                                       <optgroup label="Ganhos">
                                          <option className="ganhos" value='salario'> Salário </option>
                                       </optgroup>
                                 </select>
                              </td>
                              <td>
                                 <input
                                    type="text"
                                    value={linha.valor}
                                    className={linha.valor >= 0 ? 'valor pos' : 'valor neg'}
                                    onChange={(e) => handleChange(index, "valor", e.target.value)
                                 }
                                 />
                              </td>
                              <td>
                                 <select className={linha.status === 'pago' ? 'status pago' : (linha.status === 'a pagar' && 'status a-pagar')} value={linha.status || ""} onChange={(e) => handleChange(index, "status", e.target.value)}>
                                    <option disabled hidden value=''> </option>
                                    <option className="pago" value='pago'> Pago </option>
                                    <option className="a-pagar" value='a pagar'> A pagar </option>
                                 </select>
                              </td>
                              <IconButton onClick={() => removerLinha(linha.id)} aria-label="Remover linha">
                                 <DeleteOutlineRoundedIcon className="delete-outline-icon" />
                                 <DeleteRoundedIcon className="delete-icon" />
                              </IconButton>
                              
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
