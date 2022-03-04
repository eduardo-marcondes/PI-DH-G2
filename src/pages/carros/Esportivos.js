import { Link } from 'react-router-dom';
function Esportivos() {
    return (
        <>
            <main className="titulo-bg">
                <div>
                    <div className="titulo container">
                        <p className="font-2-xl cor-5">R$ 399.9</p>
                        <h1 className="font-1-xxl cor-0">Esportivos<span className="cor-p1">.</span></h1>
                    </div>
                </div>
                <div className="carro container">
                    <div className="carro-imagens">
                        <img src="../img/carros/esportivo-1.jpg" alt="" />
                        <img src="../img/carros/esportivo-2.jpg" alt="" />
                        <img src="../img/carros/esportivo-3.jpg" alt="" />
                    </div>
                    <div className="carro-conteudo">
                        <p className="font-2-l cor-5">Carros cheios de estilo, que valorizam a sua presença. Vem equipados com os melhores acessórios, o que garante maior velocidade.</p>
                        <div className="carro-comprar">
                            <Link className="botao" to="/orcamento">Comprar Agora</Link>
                            <span className="font-1-xs cor-6"><img src="../img/icones/entrega.svg" alt="" /> entrega em 5 dias</span>
                            <span className="font-1-xs cor-6"><img src="../img/icones/estoque.svg" alt="" /> 18 em estoque</span>
                        </div>

                        <h2 className="font-1-xs cor-0">Informações</h2>
                        <ul className="carro-informacoes">
                            <li>
                                <img src="../img/icones/motor.png" alt="" />
                                <h3 className="font-1-m cor-0">Motor Elétrico</h3>
                                <p className="font-2-xs cor-5">Permite você viajar distâncias inimaginaveis com a sua bike.</p>
                            </li>
                            <li>
                                <img src="../img/icones/velocidade.svg" alt="" />
                                <h3 className="font-1-m cor-0">50 km/h</h3>
                                <p className="font-2-xs cor-5">A mais rápida carro elétrica disponível hoje no mercado.</p>
                            </li>
                            <li>
                                <img src="../img/icones/rastreador.svg" alt="" />
                                <h3 className="font-1-m cor-0">Rastreador</h3>
                                <p className="font-2-xs cor-5">Rastreador e sistema anti-furto para garantir o seu sossego.</p>
                            </li>
                            <li>
                                <img src="../img/icones/carbono.svg" alt="" />
                                <h3 className="font-1-m cor-0">Fibra de Carbono</h3>
                                <p className="font-2-xs cor-5">Maior proteção possível para a sua Bikcraft com fibra de carbono.</p>
                            </li>
                        </ul>
                        <h2 className="font-1-xs cor-0">Ficha Técnica</h2>
                        <ul className="carro-ficha font-2-s cor-4">
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

            <article className="carros-lista container">
                <h2 className="font-1-xxl">escolha outras categorias<span className="cor-p1">.</span></h2>

                <ul>
                    <li>
                        <Link to="/suvs">
                            <img src="../img/carros/suv-1.jpg" alt="Modelo suv" />
                            <h3 className="font-1-xl">Suvs</h3>
                            <span className="font-2-m cor-8">R$ 299.9</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/picapes">
                            <img src="../img/carros/picape-1.jpg" alt="Modelo picape" />
                            <h3 className="font-1-xl">Picapes</h3>
                            <span className="font-2-m cor-8">R$ 399.9</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/conversiveis">
                            <img src="../img/carros/conversivel-1.jpg" alt="Modelo Conversivel" />
                            <h3 className="font-1-xl">Conversiveis</h3>
                            <span className="font-2-m cor-8">R$ 499.9</span>
                        </Link>
                    </li>
                </ul>
            </article>
        </>
    )
}

export default Esportivos;