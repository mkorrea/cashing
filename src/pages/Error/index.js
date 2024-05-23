import './error.css'

import Header from "../../components/Header";
import { Link } from 'react-router-dom'

export function Error () {
   return (
      <div>
         <Header/> 
         <main className="error">
            <h1>Página não encontrada!</h1>
            <h3>Error 404</h3>
            <Link to='/'>Voltar para página inicial</Link>
         </main>
      </div>
   )
}