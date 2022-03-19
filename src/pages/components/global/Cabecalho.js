import {Outlet, Link, NavLink} from "react-router-dom";
import React, {useState, useEffect} from "react";

function Cabecalho() {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#DFE4EA") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    function toggleMenu() {

        const hmenu = document.getElementById('hmenu');
        hmenu.classList.toggle('active');

    }

    return (
        <>
            <header className="header-bg">
                <nav id="nav" style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 1s"
                }}>
                    <div className="header" id='hmenu'>
                        <Link to="/">
                            <img src="/logo192.png" width="136" height="32" alt="Logotipo Digital Booking"/>
                        </Link>
                        <div className="header-menu">
                            <ul className="font-h4 cor-0">
                                <li><NavLink to="/categorias">Categorias</NavLink></li>
                                <li><NavLink to="/reserva">Reserva</NavLink></li>
                                <li><NavLink to="/contato">Contato</NavLink></li>
                                <li className="botao-header">
                                    <div>
                                        <NavLink className="botao" to="/login">Login</NavLink>
                                        <NavLink className="botao" to="/cadastro">Cadastro</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button id="btn-mobile" onClick={toggleMenu}>
                            <p>Menu</p>
                            <span id="hamburger"></span>
                        </button>

                    </div>
                </nav>
            </header>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet/>
        </>
    )
}


export default Cabecalho;