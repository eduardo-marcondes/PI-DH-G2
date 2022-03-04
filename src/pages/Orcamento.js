function Orcamento() {
    return (
        <>
            <div id="orcamento">
                <main>
                    <div className="titulo-bg">
                        <div className="titulo container">
                            <p className="font-2-l-b cor-5">Cotações no seu email</p>
                            <h1 className="font-1-xxl cor-0">solicite um orçamento<span className="cor-p1">.</span></h1>
                        </div>
                    </div>

                    <form className="orcamento container" action="/orcamento">
                        <div className="orcamento-produto">
                            <h2 className="font-1-xs cor-5">Alugueis:</h2>

                            <input type="radio" name="tipo" value="bikcraft" id="bikcraft"/>
                            <label for="bikcraft">Categorias:</label>

                            <input type="radio" name="tipo" value="seguro" id="seguro"/>
                            <label for="seguro">Entrega:</label>

                            <div className="orcamento-conteudo" id="orcamento-bikcraft">
                                <h2 className="font-1-xs cor-5">Escolha a sua</h2>

                                <input type="radio" name="produto" value="suv" id="suv"/>
                                <label for="suv">SUVs <span>R$ 299.9</span></label>
                                <div className="orcamento-detalhes">
                                    <ul className="font-1-xs cor-8">
                                        <li><img src="./img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                                        <li><img src="./img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                                        <li><img src="./img/icones/velocidade.svg" alt=""/> 50 km/h</li>
                                        <li><img src="./img/icones/rastreador.svg" alt=""/> Rastreador</li>
                                    </ul>
                                    <img src="./img/carros/suv-1.jpg" alt="Modelo Suv"/>
                                </div>

                                <input type="radio" name="produto" value="conversivel" id="conversivel"/>
                                <label for="conversivel">Conversiveis<span>R$ 499.9</span></label>
                                <div className="orcamento-detalhes">
                                    <ul className="font-1-xs cor-8">
                                        <li><img src="./img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                                        <li><img src="./img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                                        <li><img src="./img/icones/velocidade.svg" alt=""/> 45 km/h</li>
                                        <li><img src="./img/icones/rastreador.svg" alt=""/> Rastreador</li>
                                    </ul>
                                    <img src="./img/carros/conversivel-1.jpg" alt="Modelo Conversivel"/>
                                </div>

                                <input type="radio" name="produto" value="picape" id="picape"/>
                                <label for="picape">Picapes <span>R$ 399.9</span></label>
                                <div className="orcamento-detalhes">
                                    <ul className="font-1-xs cor-8">
                                        <li><img src="./img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                                        <li><img src="./img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                                        <li><img src="./img/icones/velocidade.svg" alt=""/> 40 km/h</li>
                                        <li><img src="./img/icones/rastreador.svg" alt=""/> Rastreador</li>
                                    </ul>
                                    <img src="./img/carros/picape-1.jpg" alt="Modelo Picape"/>
                                </div>

                                <input type="radio" name="produto" value="esportivo" id="esportivo"/>
                                <label htmlFor="esportivo">Esportivos <span>R$ 399.9</span></label>
                                <div className="orcamento-detalhes">
                                    <ul className="font-1-xs cor-8">
                                        <li><img src="./img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                                        <li><img src="./img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                                        <li><img src="./img/icones/velocidade.svg" alt=""/> 40 km/h</li>
                                        <li><img src="./img/icones/rastreador.svg" alt=""/> Rastreador</li>
                                    </ul>
                                    <img src="../img/carros/esportivo-1.jpg" alt="Modelo Esportivo"/>
                                </div>

                            </div>

                            <div className="orcamento-conteudo" id="orcamento-seguro">
                                <h2 className="font-1-xs cor-5">Modalidade de entrega:</h2>

                                <input type="radio" name="produto" value="prata" id="prata"/>
                                <label for="prata">Entrega na residencia <span>R$ 199.9</span></label>

                                <input type="radio" name="produto" value="ouro" id="ouro"/>
                                <label for="ouro">Entrega com chover <span>R$ 299.9</span></label>
                            </div>
                        </div>
                        <div className="orcamento-dados form">
                            <h2 className="font-1-xs cor-9 col-2">dados pessoais</h2>
                            <div>
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" name="nome"/>
                            </div>
                            <div>
                                <label for="sobrenome">Sobrenome</label>
                                <input type="text" id="sobrenome" name="sobrenome"/>
                            </div>
                            <div className="col-2">
                                <label for="cpf">CPF</label>
                                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00"/>
                            </div>
                            <div className="col-2">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email"/>
                            </div>
                            <h2 className="font-1-xs cor-9 col-2">entrega</h2>
                            <div>
                                <label for="cep">CEP</label>
                                <input type="text" id="cep" name="cep"/>
                            </div>
                            <div>
                                <label for="numero">Número</label>
                                <input type="text" id="numero" name="numero"/>
                            </div>
                            <div>
                                <label for="logradouro">Logradouro</label>
                                <input type="text" id="logradouro" name="logradouro"/>
                            </div>
                            <div>
                                <label for="bairro">Bairro</label>
                                <input type="text" id="bairro" name="bairro"/>
                            </div>
                            <div>
                                <label for="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade"/>
                            </div>
                            <div>
                                <label for="estado">Estado</label>
                                <input type="text" id="estado" name="estado"/>
                            </div>
                            <button className="botao col-2">Solicitar Orçamento</button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Orcamento;