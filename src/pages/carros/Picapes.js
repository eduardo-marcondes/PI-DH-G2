import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

function Picapes() {
    return (
        <>
            <Helmet>
                <title>DB | Categoria > Picapes</title>
            </Helmet>
            <main className="titulo-black">
                <div>
                    <div className="titulo">
                        <p className="font-h2 cor-1">R$ 399.9</p>
                        <h1 className="font-h1 cor-0">Picapes<span className="cor-p1">.</span></h1>
                    </div>
                </div>
                <div className="carro">
                    <div className="carro-imagens">
                        <img src="../img/carros/picape-1.jpg" alt="" />
                        <img src="../img/carros/picape-2.jpg" alt="" />
                        <img src="../img/carros/picape-3.jpg" alt="" />
                    </div>
                    <div className="carro-conteudo">
                        <p className="font-h3 cor-1">Carros ideais para quem está sempre em movimento, e curte se aventurar. Possui carroceria espaçosa e tração 4x4.</p>
                        <div className="carro-comprar">
                            <Link className="botao" to="/orcamento">Comprar Agora</Link>
                            <span className="font-text-2 cor-1"><img src="../img/icones/entrega.svg" alt="" /> entrega em 5 dias</span>
                            <span className="font-text-2 cor-1"><img src="../img/icones/estoque.svg" alt="" /> 18 em estoque</span>
                        </div>

                        <h2 className="font-text-2 cor-0">Informações</h2>
                        <ul className="carro-informacoes">
                            <li>
                                <img src="../img/icones/motor.png" alt="" />
                                <h3 className="font-h4 cor-0">Motor Elétrico</h3>
                                <p className="font-text-1 cor-1">Permite você viajar distâncias inimaginaveis com a sua bike.</p>
                            </li>
                            <li>
                                <img src="../img/icones/velocidade.svg" alt="" />
                                <h3 className="font-h4 cor-0">45 km/h</h3>
                                <p className="font-text-1 cor-1">A mais rápida carro elétrica disponível hoje no mercado.</p>
                            </li>
                            <li>
                                <img src="../img/icones/rastreador.svg" alt="" />
                                <h3 className="font-h4 cor-0">Rastreador</h3>
                                <p className="font-text-1 cor-1">Rastreador e sistema anti-furto para garantir o seu sossego.</p>
                            </li>
                            <li>
                                <img src="../img/icones/carbono.svg" alt="" />
                                <h3 className="font-h4 cor-0">Fibra de Carbono</h3>
                                <p className="font-text-1 cor-1">Maior proteção possível para a sua Bikcraft com fibra de carbono.</p>
                            </li>
                        </ul>
                        <h2 className="font-text-2 cor-0">Ficha Técnica</h2>
                        <ul className="carro-ficha font-text-1 cor-4">
                            <li>Peso <span>9 kg</span></li>
                            <li>Altura <span>60 cm</span></li>
                            <li>Largura <span>120 cm</span></li>
                            <li>Profundidade <span>10 cm</span></li>
                            <li>Marchas <span>16</span></li>
                            <li>Roda <span>29</span></li>
                        </ul>
                    </div>
                </div>
            </main>

            <div className="carros-lista">
                <h2 className="font-h1">escolha outras categorias<span className="cor-p1">.</span></h2>

                <ul>
                    <li>
                        <Link to="/suvs">
                            <img src="../img/carros/suv-1.jpg" alt="Modelo Suv" />
                            <h3 className="font-h2">Suvs</h3>
                            <span className="font-h4 cor-8">R$ 299.9</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/conversiveis">
                            <img src="../img/carros/conversivel-1.jpg" alt="Modelo Conversivel" />
                            <h3 className="font-h2">Conversiveis</h3>
                            <span className="font-h4 cor-8">R$ 499.9</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/esportivos">
                            <img src="../img/carros/esportivo-1.jpg" alt="Modelo Esportivo" />
                            <h3 className="font-h2">Esportivos</h3>
                            <span className="font-h4 cor-8">R$ 399.9</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Picapes;