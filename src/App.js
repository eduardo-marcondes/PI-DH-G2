import './App.css';

import {Routes, Route} from "react-router-dom";
import Cabecalho from "./pages/components/Cabecalho";
import Home from "./pages/Home";
import Frota from "./pages/Frota";
import Contato from "./pages/Contato";
import Rodape from './pages/components/Rodape';
import Reserva from './pages/Reserva';
import Termos from './pages/Termos';
import Suvs from './pages/carros/Suvs'
import Picapes from "./pages/carros/Picapes";
import Esportivos from "./pages/carros/Esportivos";
import Conversiveis from "./pages/carros/Conversiveis";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

//import NoPage from "./pages/NoPage";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Cabecalho/>}>
                    <Route index element={<Home/>}/>
                    <Route path="categorias" element={<Frota/>}/>
                    <Route path="contato" element={<Contato/>}/>
                    <Route path="reserva" element={<Reserva/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="termos" element={<Termos/>}/>
                    <Route path="suvs" element={<Suvs/>}/>
                    <Route path="conversiveis" element={<Conversiveis/>}/>
                    <Route path="esportivos" element={<Esportivos/>}/>
                    <Route path="picapes" element={<Picapes/>}/>
                    <Route path="cadastro" element={<Cadastro/>}/>
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
            <Rodape/>
        </>
    );
}

export default App;