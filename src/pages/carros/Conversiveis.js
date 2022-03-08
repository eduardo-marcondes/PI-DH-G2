import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import ListCategory from "../components/cards/ListCategory";

function Conversiveis() {

    return (
        <>
            <Helmet>
                <title>DB | Categoria > Conversiveis</title>
            </Helmet>

            <main className="titulo-bg">
                <div>
                    <div className="titulo container">
                        <p className="font-2-xl cor-5">R$ 499.9</p>
                        <h1 className="font-1-xxl cor-0">Conversiveis<span className="cor-p1">.</span></h1>
                    </div>
                </div>

                <div className="carro container">
                    <div className="carro-imagens">
                        <img src="../img/carros/conversivel-1.jpg" alt=""/>
                        <img src="../img/carros/conversivel-2.jpg" alt=""/>
                        <img src="../img/carros/conversivel-3.jpg" alt=""/>
                    </div>
                    <div className="carro-conteudo">
                        <p className="font-2-l cor-5">Carros que prezam pelo conforto e luxo, para uma experiência na direção incomparável, e sensação de liberdade.</p>
                        <div className="carro-comprar">
                            <Link className="botao" to="/orcamento">Comprar Agora</Link>
                            <span className="font-1-xs cor-6"><img src="../img/icones/entrega.svg" alt=""/> entrega em 5 dias</span>
                            <span className="font-1-xs cor-6"><img src="../img/icones/estoque.svg" alt=""/> 18 em estoque</span>
                        </div>

                        <h2 className="font-1-xs cor-0">Informações</h2>
                        <ul className="carro-informacoes">
                            <li>
                                <img src="../img/icones/motor.png" alt=""/>
                                <h3 className="font-1-m cor-0">Motor Elétrico</h3>
                                <p className="font-2-xs cor-5">Permite você viajar distâncias inimaginaveis com a sua
                                    bike.</p>
                            </li>
                            <li>
                                <img src="../img/icones/velocidade.svg" alt=""/>
                                <h3 className="font-1-m cor-0">40 km/h</h3>
                                <p className="font-2-xs cor-5">A mais rápida carro elétrica disponível hoje no
                                    mercado.</p>
                            </li>
                            <li>
                                <img src="../img/icones/rastreador.svg" alt=""/>
                                <h3 className="font-1-m cor-0">Rastreador</h3>
                                <p className="font-2-xs cor-5">Rastreador e sistema anti-furto para garantir o seu
                                    sossego.</p>
                            </li>
                            <li>
                                <img src="../img/icones/carbono.svg" alt=""/>
                                <h3 className="font-1-m cor-0">Fibra de Carbono</h3>
                                <p className="font-2-xs cor-5">Maior proteção possível para a sua Bikcraft com fibra de
                                    carbono.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <article className="carros-lista container">
                <h2 className="font-1-xxl">escolha outras categorias<span className="cor-p1">.</span></h2>

                <ul>
                   <ListCategory/>
                </ul>

            </article>
        </>
    )
}

export default Conversiveis;