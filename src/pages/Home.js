import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <main className="introducao-bg">
                <div className="introducao container">
                    <div className="introducao-conteudo">
                        <h1 className="font-1-xxl cor-0">alugue carros exclusivos<span className="cor-p1">.</span></h1>
                        <p className="font-2-l cor-5">.</p>
                    </div>
                    <div className="form form-home">
                        <input type="text" id="local" name="local" placeholder="Local"/>
                        <input type="date" id="retirada" name="retirada" placeholder="Retirada"/>
                        <input type="date" id="devolucao" name="devolucao" placeholder="Devolucao"/>
                        <input type="submit" className="botao"/>
                    </div>
                </div>
            </main>

            <article className="carros-lista">
                <div className="titulo container">
                    <p className="font-2-l-b cor-5">As suas novas emoções começam aqui</p>
                    <h2 className="container font-1-xxl">categorias<span className="cor-p1">.</span></h2>
                </div>
                <ul>
                    <li>
                        <Link to="/suvs">
                            <img src="./img/carros/suv-1.png" alt="modelo suv" width="920" height="1040"/>
                            <div className="carro-textos">
                                <h3 className="font-1-xl">SUVs</h3>
                                <span className="font-2-m cor-8">R$ 299.9</span>
                            </div>
                        </Link>

                    </li>
                    <li>
                        <Link to="/conversiveis">
                            <img src="./img/carros/conversivel-1.png" alt="modelo conversivel" width="920"
                                 height="1040"/>
                            <div className="carro-textos">
                                <h3 className="font-1-xl">Conversiveis</h3>
                                <span className="font-2-m cor-8">R$ 499.9</span>
                            </div>
                        </Link>

                    </li>
                    <li>
                        <Link to="/picapes">
                            <img src="./img/carros/picape-1.png" alt="modelo picape" width="920" height="1040"/>
                            <div className="carro-textos">
                                <h3 className="font-1-xl">Picapes</h3>
                                <span className="font-2-m cor-8">R$ 399.9</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/esportivos">
                            <img src="./img/carros/esportivo-1.png" alt="modelo esportivo" width="920"
                                 height="1040"/>
                            <div className="carro-textos">
                                <h3 className="font-1-xl">Esportivos</h3>
                                <span className="font-2-m cor-8">R$ 399.9</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </article>

            <article className="populares">
                <div className="titulo-bg">
                    <div className="titulo container">
                        <p className="font-2-l-b cor-5">os mais alugados de nossa frota</p>
                        <h1 className="container font-1-xxl cor-0">populares<span className="cor-p1">.</span></h1>
                    </div>
                </div>

                <div className="mais-alugados">
                    <div>
                        <div className="carros-bg">
                            <div className="carros container">
                                <div className="carros-imagem">
                                    <img src="./img/carros/conversivel-1.png" alt="Modelo Conversivel"/>
                                    <span className="font-2-m cor-0">R$ 499.9</span>
                                </div>
                                <div className="carros-informacoes">
                                    <div>
                                        <h2 className="font-1-xl cor-0">Conversiveis</h2>
                                        <ul className="font-1-m cor-5">
                                            <li>
                                                <img src="./img/icones/motor.png" alt=""/>
                                                Audi
                                            </li>
                                            <li>
                                                <img src="./img/icones/rastreador.svg" alt=""/>
                                                Brasil
                                            </li>
                                        </ul>
                                        <p className="font-2-s cor-5">Carros que prezam pelo conforto e
                                            luxo.</p>
                                    </div>
                                    <Link className="botao seta" to="/conversiveis">Mais Sobre</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carros container">
                            <div className="carros-imagem">
                                <img src="./img/carros/suv-1.png" alt="Modelo Suvs"/>
                                <span className="font-2-m cor-0">R$ 299.9</span>
                            </div>
                            <div className="carros-informacoes">
                                <div>
                                    <h2 className="font-1-xl">SUVs</h2>
                                    <ul className="font-1-m cor-8">
                                        <li>
                                            <img src="./img/icones/motor.png" alt=""/>
                                            Range rover
                                        </li>
                                        <li>
                                            <img src="./img/icones/rastreador.svg" alt=""/>
                                            Brasil
                                        </li>
                                    </ul>
                                    <p className="font-2-s cor-8">Carros maiores ideias para familia toda.</p>
                                </div>
                                <Link className="botao seta" to="/suvs">Mais Sobre</Link>
                            </div>
                        </div>
                    </div>
                    <div className="reverse">
                        <div className="carros container">
                            <div className="carros-imagem">
                                <img src="./img/carros/picape-1.png" alt="Modelo Picape"/>
                                <span className="font-2-m cor-0">R$ 399.9</span>
                            </div>
                            <div className="carros-informacoes">
                                <h2 className="font-1-xl">Picapes</h2>
                                <div>
                                    <ul className="font-1-m cor-8">
                                        <li>
                                            <img src="./img/icones/motor.png" alt=""/>
                                            Dodge Ram
                                        </li>
                                        <li>
                                            <img src="./img/icones/rastreador.svg" alt=""/>
                                            Brasil
                                        </li>
                                    </ul>
                                    <p className="font-2-s cor-8">Carros ideais para quem
                                        curte aventura.</p>
                                </div>
                                <Link className="botao seta" to="/picapes">Mais Sobre</Link>
                            </div>
                        </div>
                        <div className="carros-bg">
                            <div className="carros container">
                                <div className="carros-imagem">
                                    <img src="./img/carros/esportivo-1.jpg" alt="Modelo Esportivo"/>
                                    <span className="font-2-m cor-0">R$ 399.9</span>
                                </div>
                                <div className="carros-informacoes">
                                    <div>
                                        <h2 className="font-1-xl cor-0">Esportivos</h2>
                                        <ul className="font-1-m cor-5">
                                            <li>
                                                <img src="./img/icones/motor.png" alt=""/>
                                                Audi
                                            </li>
                                            <li>
                                                <img src="./img/icones/rastreador.svg" alt=""/>
                                                Brasil
                                            </li>
                                        </ul>
                                        <p className="font-2-s cor-5">Carros cheios de estilo, que garante maior
                                            velocidade.</p>
                                    </div>
                                    <Link className="botao seta" to="/esportivos">Mais Sobre</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="vantagens-bg">
                <div className="vantagens container">
                    <div className="titulo container">
                        <p className="font-2-l-b cor-5">A melhor experiencia de luxo em aluguel de carros</p>
                        <h2 className="container font-1-xxl cor-0">vantagens<span className="cor-p1">.</span></h2>
                    </div>
                    <ul>
                        <li>
                            <img src="./img/icones/dogs.png" alt="" style={{width: "32px"}}/>
                            <h3 className="font-1-l cor-0">Pet Friendly</h3>
                            <p className="font-2-s cor-5">Sabemos que seu melhor amigo não pode ficar de fora, por isso
                                garantimos a segurança de seu pet.</p>
                        </li>
                        <li>
                            <img src="./img/icones/support.png" alt="" style={{width: "32px"}}/>
                            <h3 className="font-1-l cor-0">Prático</h3>
                            <p className="font-2-s cor-5">Nosso atendimento é 24h. Você assina e recebe o carro sem se
                                preocupar com burocracias, a qualquer hora que desejar.</p>
                        </li>
                        <li>
                            <img src="./img/icones/sustentavel.svg" alt=""/>
                            <h3 className="font-1-l cor-0">Sustentável</h3>
                            <p className="font-2-s cor-5">Trabalhamos com carros hibridos e automaticos, para tornar sua
                                experiencia mais pratica.</p>
                        </li>
                        <li>
                            <img src="./img/icones/combustivel.png" alt="" style={{width: "32px"}}/>
                            <h3 className="font-1-l cor-0">Abastecimento</h3>
                            <p className="font-2-s cor-5">Use nosso aplicativo para localizar nossos postos parceiros e
                                ganhe desconto e vantagens.</p>
                        </li>
                        <li>
                            <img src="./img/icones/seguro.svg" alt=""/>
                            <h3 className="font-1-l cor-0">Segurança</h3>
                            <p className="font-2-s cor-5">Com o seguro você pode viajar tranquilo, pois temos ampla rede
                                de oficinas prontos para resolver qualquer emergencia.</p>
                        </li>
                        <li>
                            <img src="./img/icones/velocidade.svg" alt=""/>
                            <h3 className="font-1-l cor-0">Rapidez</h3>
                            <p className="font-2-s cor-5">Todos nossos veiculos possuem tag de pedagios para que você
                                economize tempo, e usuflua melhor de sua viagem.</p>
                        </li>
                    </ul>
                </div>
            </article>

            <section className="parceiros" aria-label="Nossos Parceiros">
                <div className="titulo container">
                    <p className="font-2-l-b cor-5">Luxo e personalidade</p>
                    <h2 className="container font-1-xxl">marcas<span className="cor-p1">.</span></h2>
                </div>
                <ul>
                    <li><img src="./img/parceiros/caravan.svg" alt="Caravan" width="140" height="38"/></li>
                    <li><img src="./img/parceiros/ranek.svg" alt="Ranek" width="149" height="36"/></li>
                    <li><img src="./img/parceiros/handel.svg" alt="Handel" width="140" height="50"/></li>
                    <li><img src="./img/parceiros/dogs.svg" alt="Dogs" width="152" height="39"/></li>
                    <li><img src="./img/parceiros/lescone.svg" alt="LeScone" width="208" height="41"/></li>
                    <li><img src="./img/parceiros/flexblog.svg" alt="FlexBlog" width="165" height="38"/></li>
                    <li><img src="./img/parceiros/audi.svg" alt="Audi" width="200" height="34"/></li>
                    <li><img src="./img/parceiros/surfbot.svg" alt="Surfbot" width="200" height="49"/></li>
                </ul>
            </section>
        </>
    )
}

export default Home;