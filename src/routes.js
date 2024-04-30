import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from './pages/Inicio'
import Cadastro from './pages/Cadastro'
import Finances from './pages/Finances'
import Planilhas from "./pages/Planilhas";
   import Tabela from './pages/Planilhas/Tabela'

import Error from './pages/Error'

function RoutesApp() {
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/" element={ <Inicio/> } />
                <Route path="/cadastro" element={ <Cadastro/> } />
                <Route path="/financas" element={ <Finances/> } />
                <Route path="/planilhas" element={ <Planilhas/> } />
                  <Route path="/planilhas/tabela/:idDaPlanilha" element={ <Tabela/> } />

                <Route path="*" element={ <Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;