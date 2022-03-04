import { Link } from "react-router-dom";

function Categorias() {
  return (
    <>
      <main>
        <div className="titulo-bg">
          <div className="titulo container">
            <p className="font-2-l-b cor-5">Escolha o melhor para você</p>
            <h1 className="font-1-xxl cor-0">nossas categorias<span className="cor-p1">.</span></h1>
          </div>
        </div>

        <div className="carros container">
          <div className="carros-imagem">
            <img src="./img/carros/suv-1.jpg" alt="Modelo Suvs" />
            <span className="font-2-m cor-0">R$ 299.9</span>
          </div>
          <div className="carros-conteudo">
            <h2 className="font-1-xl">SUVs</h2>
            <p className="font-2-s cor-8">Carros maiores e com um porta-malas mais amplo, para quem prefere ter mais de espaço, conforto e tecnologia.</p>
            <ul className="font-1-m cor-8">
              <li>
                <img src="./img/icones/motor.png" alt="" />
                Motor Elétrico
              </li>
              <li>
                <img src="./img/icones/carbono.svg" alt="" />
                Fibra de Carbono
              </li>
              <li>
                <img src="./img/icones/velocidade.svg" alt="" />
                50 km/h
              </li>
              <li>
                <img src="./img/icones/rastreador.svg" alt="" />
                Rastreador
              </li>
            </ul>
            <Link className="botao seta" to="/suvs">Mais Sobre</Link>
          </div>
        </div>

        <div className="carros-bg">
          <div className="carros container">
            <div className="carros-imagem">
              <img src="./img/carros/conversivel-1.jpg" alt="Modelo Conversivel" />
              <span className="font-2-m cor-0">R$ 499.9</span>
            </div>
            <div className="carros-conteudo">
              <h2 className="font-1-xl cor-0">Conversiveis</h2>
              <p className="font-2-s cor-5">Carros que prezam pelo conforto e luxo, para uma experiência na direção incomparável, e sensação de liberdade.</p>
              <ul className="font-1-m cor-5">
                <li>
                  <img src="./img/icones/motor.png" alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src="./img/icones/carbono.svg" alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src="./img/icones/velocidade.svg" alt="" />
                  45 km/h
                </li>
                <li>
                  <img src="./img/icones/rastreador.svg" alt="" />
                  Rastreador
                </li>
              </ul>
              <Link className="botao seta" to="/conversiveis">Mais Sobre</Link>
            </div>
          </div>
        </div>

        <div className="carros container">
          <div className="carros-imagem">
            <img src="./img/carros/picape-1.jpg" alt="Modelo Picape" />
            <span className="font-2-m cor-0">R$ 399.9</span>
          </div>
          <div className="carros-conteudo">
            <h2 className="font-1-xl">Picapes</h2>
            <p className="font-2-s cor-8">Carros ideais para quem está sempre em movimento, e curte se aventurar. Possui carroceria espaçosa e tração 4x4.</p>
            <ul className="font-1-m cor-8">
              <li>
                <img src="./img/icones/motor.png" alt="" />
                Motor Elétrico
              </li>
              <li>
                <img src="./img/icones/carbono.svg" alt="" />
                Fibra de Carbono
              </li>
              <li>
                <img src="./img/icones/velocidade.svg" alt="" />
                50 km/h
              </li>
              <li>
                <img src="./img/icones/rastreador.svg" alt="" />
                Rastreador
              </li>
            </ul>
            <Link className="botao seta" to="/picapes">Mais Sobre</Link>
          </div>
        </div>
        
        <div className="carros-bg">
          <div className="carros container">
            <div className="carros-imagem">
              <img src="./img/carros/esportivo-1.jpg" alt="Modelo Esportivo" />
              <span className="font-2-m cor-0">R$ 399.9</span>
            </div>
            <div className="carros-conteudo">
              <h2 className="font-1-xl cor-0">Esportivos</h2>
              <p className="font-2-s cor-5">Carros cheios de estilo, que valorizam a sua presença. Vem equipados com os melhores acessórios, o que garante maior velocidade.</p>
              <ul className="font-1-m cor-5">
                <li>
                  <img src="./img/icones/motor.png" alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src="./img/icones/carbono.svg" alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src="./img/icones/velocidade.svg" alt="" />
                  45 km/h
                </li>
                <li>
                  <img src="./img/icones/rastreador.svg" alt="" />
                  Rastreador
                </li>
              </ul>
              <Link className="botao seta" to="/esportivos">Mais Sobre</Link>
            </div>
          </div>
        </div>
      </main>
      <section className="parceiros" aria-label="Nossos Parceiros">
        <h2 className="container font-1-xxl">marcas parceiras<span className="cor-p1">.</span></h2>
        <ul>
          <li><img src="./img/parceiros/caravan.svg" alt="Caravan" width="140" height="38" /></li>
          <li><img src="./img/parceiros/ranek.svg" alt="Ranek" width="149" height="36" /></li>
          <li><img src="./img/parceiros/handel.svg" alt="Handel" width="140" height="50" /></li>
          <li><img src="./img/parceiros/dogs.svg" alt="Dogs" width="152" height="39" /></li>
          <li><img src="./img/parceiros/lescone.svg" alt="LeScone" width="208" height="41" /></li>
          <li><img src="./img/parceiros/flexblog.svg" alt="FlexBlog" width="165" height="38" /></li>
          <li><img src="./img/parceiros/wildbeast.svg" alt="Wildbeast" width="196" height="34" /></li>
          <li><img src="./img/parceiros/surfbot.svg" alt="Surfbot" width="200" height="49" /></li>
        </ul>
      </section>
    </>
  )
}
export default Categorias;