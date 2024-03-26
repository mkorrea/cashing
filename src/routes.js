import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Finances from './pages/Finances'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/finances" element={ <Finances/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;