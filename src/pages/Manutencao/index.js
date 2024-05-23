import './manutencao.css'

import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo-main-color.png'; 

export function Manutencao () {
   return (
      <div>
         <Header/> 
         <main className="manutencao">
            <h1>Desculpe!</h1>
            <h3>Esta página está em manutenção</h3>
            <Link to='/'>Retornar à página inicial</Link>
            
            <img src={logo} alt="logo cashing" />
         </main>
      </div>
   )
}