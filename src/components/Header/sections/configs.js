import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebaseConnections'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useTheme } from "../../../contexts/ThemeContexts";

import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { PersonRounded } from "@mui/icons-material";

function Configs() {
   const [openConfigs, setOpenConfigs] = useState(false);
   const navigate = useNavigate()

   const [ logado, setLogado ] = useState(false)
   const [ username, setUsername ] = useState('')

   const { darkMode, toggleDarkMode } = useTheme(); 
   
   useEffect( ()=>{
      async function checkLogin() {
         onAuthStateChanged(auth, (user)=>{
            if(user){
               setLogado(true)
               getDoc(doc(db, 'user', user.uid))
               .then((snapshot)=>{
                  setUsername(snapshot.data().nome)
               })
               
            } else {
               setLogado(false)
               setUsername('')
            }
         })
      }
      checkLogin()
   }, [])



   function handleSettings() {
      setOpenConfigs(!openConfigs);
   }

   useEffect(() => {
      function handleClickOutside(event) {
         const settingsContainer = document.querySelector(".settings");
         if (settingsContainer && !settingsContainer.contains(event.target)) {
            setOpenConfigs(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);




   async function handleLogout() {
      await signOut(auth)
      navigate('/')
   }


   return (
      <li className="settings">
         <div className="icon" onClick={handleSettings}>
            <PersonRounded />
            {!openConfigs && logado ? 
            <p className="nome-login"> {username} </p> 
            : 
            <p className="nome-login off"> {username} </p> 
            }
         </div>

         <div className={openConfigs ? "opened configs" : "closed configs"}>
            { logado ? 
               <h2>Olá, {username} </h2>
               :
               <h3> <Link to='/login'> Entrar </Link> / <Link to='/Cadastro'> Cadastrar </Link></h3>
            }

            <article className="opcoes">
               <div>
                  Sua conta
               </div>
               <div className="darkmode">
                  Modo escuro: <span onClick={toggleDarkMode}> {darkMode ? <ToggleOnIcon /> :<ToggleOffIcon />}</span>
               </div>
            </article>
            <hr />
            <button className="sair" onClick={handleLogout}>Sair</button>
         </div>
      </li>
   );
}

export default Configs;
