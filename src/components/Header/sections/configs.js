import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
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
   const navigate = useNavigate()

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

            
            <div>
               Modo escuro: <ToggleOffIcon /> <ToggleOnIcon />{" "}
            </div>
            <hr />
            <button className="sair" onClick={handleLogout}>Sair</button>
         </div>
      </li>
   );
}

export default Configs;
