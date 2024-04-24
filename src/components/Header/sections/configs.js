import { useState, useEffect, useContext } from "react";
import UserContext from "../../../pages/Cadastro/UserContext";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { PersonRounded } from "@mui/icons-material";

function Configs() {
   const { user, updateUser } = useContext(UserContext);
   const [ openConfigs, setOpenConfigs ] = useState(false)

   function handleSettings() {
setOpenConfigs(!openConfigs)
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

   return (
      <li className="settings">
         <div className="icon" onClick={handleSettings} >
            <PersonRounded />
         </div>

         <div className={openConfigs ? "opened configs" : "closed configs"}>
            <h2>Olá, {user.firstName} </h2>
            <div> Modo escuro: <ToggleOffIcon /> <ToggleOnIcon />{" "} </div>
            <hr/>
         </div>
      </li>
   );
}

export default Configs;
