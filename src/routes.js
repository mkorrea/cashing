import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Register from './pages/Register'
import Finances from './pages/Finances'
import Sheets from "./pages/Sheets";

import Error from './pages/Error'

function RoutesApp() {
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/cadastro" element={ <Register/> } />
                <Route path="/financas" element={ <Finances/> } />
                <Route path="/planilhas" element={ <Sheets/> } />

                <Route path="*" element={ <Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;