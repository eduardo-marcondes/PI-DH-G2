import { Link } from "react-router-dom";
import Marca from "./components/Marca";
import {Helmet} from "react-helmet";

function Categorias() {
  return (
    <>
      <Helmet>
        <title>DB | Categorias</title>
      </Helmet>
      <main>
        <div className="titulo-bg">
          <div className="titulo container">
            <p className="font-h3 cor-1">Escolha o melhor para você</p>
            <h1 className="font-h1 cor-0">nossas categorias<span className="cor-p1">.</span></h1>
          </div>
        </div>

        <div className="carros container">
          <div className="carros-imagem">
            <img src="./img/carros/suv-1.jpg" alt="Modelo Suvs" />
            <span className="font-h4 cor-0">R$ 299.9</span>
          </div>
          <div className="carros-conteudo">
            <h2 className="font-h2">SUVs</h2>
            <p className="font-text-1 cor-8">Carros maiores e com um porta-malas mais amplo, para quem prefere ter mais de espaço, conforto e tecnologia.</p>
            <ul className="font-h4 cor-8">
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
              <span className="font-h4 cor-0">R$ 499.9</span>
            </div>
            <div className="carros-conteudo">
              <h2 className="font-h2 cor-0">Conversiveis</h2>
              <p className="font-text-1 cor-1">Carros que prezam pelo conforto e luxo, para uma experiência na direção incomparável, e sensação de liberdade.</p>
              <ul className="font-h4 cor-1">
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
            <span className="font-h4 cor-0">R$ 399.9</span>
          </div>
          <div className="carros-conteudo">
            <h2 className="font-h2">Picapes</h2>
            <p className="font-text-1 cor-8">Carros ideais para quem está sempre em movimento, e curte se aventurar. Possui carroceria espaçosa e tração 4x4.</p>
            <ul className="font-h4 cor-8">
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
              <span className="font-h4 cor-0">R$ 399.9</span>
            </div>
            <div className="carros-conteudo">
              <h2 className="font-h2 cor-0">Esportivos</h2>
              <p className="font-text-1 cor-1">Carros cheios de estilo, que valorizam a sua presença. Vem equipados com os melhores acessórios, o que garante maior velocidade.</p>
              <ul className="font-h4 cor-1">
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
        <Marca/>
      </main>
    </>
  )
}
export default Categorias;