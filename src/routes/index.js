import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from '../pages/Inicio'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Planilhas from "../pages/Planilhas";
   import Tabela from '../pages/Planilhas/Tabela'
import Private from "./Private";

import { Manutencao } from '../pages/Manutencao'
import { Error } from '../pages/Error'

function RoutesApp() {
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/" element={ <Inicio/> } />
                <Route path="/cadastro" element={ <Cadastro/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/planilhas" element={ <Private> <Planilhas/> </Private> } />
                  <Route path="/planilhas/tabela/:idDaPlanilha" element={ <Tabela/> } />

                <Route path="/manutencao" element={ <Manutencao/>} />
                <Route path="*" element={ <Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;