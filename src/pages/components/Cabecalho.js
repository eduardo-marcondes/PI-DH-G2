import {Outlet, Link, NavLink} from "react-router-dom";
import React, {useState, useEffect} from "react";

function Cabecalho() {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#111111") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <>
            <header className="header-bg">
                <nav aria-label="primaria" style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 1s"
                }}>
                    <div className="header container">
                        <Link to="/">
                            <img src="./logo192.png" width="136" height="32" alt="Logotipo Digital Booking"/>
                        </Link>
                        <ul className="header-menu font-1-m cor-0">
                            <li><NavLink to="/categorias">Categorias</NavLink></li>
                            <li><NavLink to="/reserva">Reserva</NavLink></li>
                            <li><NavLink to="/contato">Contato</NavLink></li>
                        </ul>

                        <Link to="/login" className="font-1-m cor-0">Login</Link>
                        <Link to="/cadastro" className="font-1-m cor-0">Cadastro</Link>

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