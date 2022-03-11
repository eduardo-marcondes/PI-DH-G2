import CardsWhite from "./components/cards/CardsWhite";
import Marca from "./components/Marca";
import Vantagem from "./components/Vantagem";
import Categoria from "./components/Categoria";
import {Helmet} from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>Digital Booking - Luxury Cars</title>
            </Helmet>

            <section className="introducao-bg">
                <div className="form-container">

                    <div className="search-title">
                        <h1 className="container font-h1 cor-0">faça já sua reserva<span className="cor-p1">.</span>
                        </h1>
                    </div>
                    <div className="form form-home">
                        <input type="text" id="local" name="local" placeholder="Local"/>
                        <input type="date" id="retirada" name="retirada" placeholder="Retirada"/>
                        <input type="date" id="devolucao" name="devolucao" placeholder="Devolucao"/>
                        <input type="submit" className="botao" value="CONSULTAR"/>
                    </div>

                </div>
            </section>
            <main>
                <Categoria/>

                <article className="populares">
                    <div className="titulo-bg">
                        <div className="titulo container">
                            <p className="font-h3 cor-1">os mais alugados de nossa frota</p>
                            <h1 className="container font-h1 cor-0">populares<span className="cor-p1">.</span></h1>
                        </div>
                    </div>

                    <div className="mais-alugados">
                        <CardsWhite/>
                    </div>
                </article>

                <Vantagem/>
                <Marca/>
            </main>
        </>
    )
}

export default Home;