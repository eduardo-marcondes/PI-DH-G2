import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HelmetProvider} from 'react-helmet-async';
import Cabecalho from "../pages/components/global/Cabecalho";
import Home from "../pages/Home";
import Frota from "../pages/Frota";
import Contato from "../pages/Contato";
import Reserva from "../pages/Reserva";
import Login from "../pages/Login";
import Termos from "../pages/Termos";
import Suvs from "../pages/carros/Suvs";
import Conversiveis from "../pages/carros/Conversiveis";
import Esportivos from "../pages/carros/Esportivos";
import Picapes from "../pages/carros/Picapes";
import Cadastro from "../pages/Cadastro";
import Rodape from "../pages/components/global/Rodape";
import Products from "../pages/components/Products";

function RouteList() {
    return (
        <>
            <BrowserRouter>
                <HelmetProvider>
                    <Cabecalho/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
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
                        <Route path="produtos/:category" element={<Products/>}/>
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Routes>
                    <Rodape/>
                </HelmetProvider>
            </BrowserRouter>
        </>
    );
}

export default RouteList;