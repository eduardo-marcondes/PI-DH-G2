import {Helmet} from "react-helmet";

function Contato() {
    return (
        <>
            <Helmet>
                <title>DB | Contato</title>
            </Helmet>
            <main>
                <section id="contato">
                    <div className="titulo-bg">
                        <div className="titulo container">
                            <p className="font-h3 cor-1">Respostas em até 24h</p>
                            <h1 className="font-h1 cor-0">nosso contato<span className="cor-p1">.</span></h1>
                        </div>
                    </div>

                    <div className="contato container">
                        <section className="contato-dados" aria-label="Endereço">
                            <h2 className="font-h4 cor-0">Loja Online</h2>
                            <div className="contato-endereco font-text-1 cor-4">
                                <p>Rua Ali Perto, 35</p>
                                <p>Rio de Janeiro - RJ</p>
                                <p>Brasil - Terra - Vita Láctea</p>
                            </div>
                            <address className="contato-meios font-text-1 cor-4">
                                <a href="mailto:contato@bikcraft.com">contato@digitalbooking.com</a>
                                <a href="mailto:assistencia@bikcraft.com">assistencia@digitalbooking.com</a>
                                <a href="tel:+552199999999">+55 21 9999-9999</a>
                            </address>
                            <div className="contato-redes">
                                <a href="./">
                                    <img src="./img/redes/instagram-p.svg" alt="Instagram"/>
                                </a>
                                <a href="./">
                                    <img src="./img/redes/facebook-p.svg" alt="Facebook"/>
                                </a>
                                <a href="./">
                                    <img src="./img/redes/youtube-p.svg" alt="Youtube"/>
                                </a>
                            </div>
                        </section>
                        <section className="contato-formulario" aria-label="Formulário">
                            <form className="form" action="/contato">
                                <div>
                                    <label for="nome">Nome</label>
                                    <input type="text" id="nome" name="nome" placeholder="Seu nome"/>
                                </div>
                                <div>
                                    <label for="telefone">Telefone</label>
                                    <input type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999"/>
                                </div>
                                <div className="col-2">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="contato@email.com"/>
                                </div>
                                <div className="col-2">
                                    <label for="mensagem">Mensagem</label>
                                    <textarea rows="5" id="mensagem" name="mensagem"
                                              placeholder="O que você precisa?"></textarea>
                                </div>
                                <button className="botao col-2">Enviar Mensagem</button>
                            </form>
                        </section>
                    </div>
                </section>

                <article className="lojas container">
                    <h2 className="font-h1">lojas locais<span className="cor-p1">.</span></h2>
                    <div className="lojas-item">
                        <img src="./img/lojas/rj.jpg"
                             alt="mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ"/>
                        <div className="lojas-conteudo">
                            <h3 className="font-h2">Rio de Janeiro</h3>
                            <div className="lojas-dados font-text-1 cor-8">
                                <p>Rua Ali Perto, 25</p>
                                <p>Rio de Janeiro - RJ</p>
                            </div>
                            <div className="lojas-dados font-text-1 cor-8">
                                <a href="mailto:rj@bikcraft.com">rj@digitalbooking.com</a>
                                <a href="tel:+552199999999">+55 21 9999-9999</a>
                            </div>
                            <p className="lojas-tempo font-text-1"><img src="./img/icones/horario.svg" alt=""/>08-18h de
                                seg à dom</p>
                        </div>
                    </div>

                    <div className="lojas-item">
                        <img src="./img/lojas/sp.jpg"
                             alt="mapa marcando o endereço em Rua Ali Perto, 25 - São Paulo - SP"/>
                        <div className="lojas-conteudo">
                            <h3 className="font-h2">São Paulo</h3>
                            <div className="lojas-dados font-text-1 cor-8">
                                <p>Rua Ali Perto, 25</p>
                                <p>São Paulo - SP</p>
                            </div>
                            <div className="lojas-dados font-text-1 cor-8">
                                <a href="mailto:sp@bikcraft.com">sp@digitalbooking.com</a>
                                <a href="tel:+551199999999">+55 11 9999-9999</a>
                            </div>
                            <p className="lojas-tempo font-text-1"><img src="./img/icones/horario.svg" alt=""/>08-18h de
                                seg à dom</p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Contato;