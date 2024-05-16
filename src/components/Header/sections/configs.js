import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import UserContext from "../../../pages/Cadastro/UserContext";
import { auth, db } from '../../../firebaseConnections'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { PersonRounded } from "@mui/icons-material";

function Configs() {
   // const { user, updateUser } = useContext(UserContext);
   const [openConfigs, setOpenConfigs] = useState(false);

   const [ logado, setLogado ] = useState(false)
   const [ username, setUsername ] = useState('')

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
   }


   return (
      <li className="settings">
         <div className="icon" onClick={handleSettings}>
            <PersonRounded />
         </div>

         <div className={openConfigs ? "opened configs" : "closed configs"}>
            { logado ? 
               <h2>Olá, {username} </h2>
               :
               <h3><Link to={'/Cadastro'}>Entrar / Cadastrar</Link></h3>
            }

            
            <div>
               {" "}
               Modo escuro: <ToggleOffIcon /> <ToggleOnIcon />{" "}
            </div>
            <hr />
            <button onClick={handleLogout}>Sair</button>
            </div>
      </li>
   );
}

export default Configs;
