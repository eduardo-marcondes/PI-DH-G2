function Vantagem() {
    return (
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
    )
}

export default Vantagem;