import CardsWhite from "./components/cards/CardsWhite";
import Marca from "./components/Marca";
import Vantagem from "./components/Vantagem";
import Categoria from "./components/Categoria";
import {Helmet} from "react-helmet";

function Home() {

    return (
        <>
            <Helmet>
                <title>Digital Booking</title>
            </Helmet>
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

            <Categoria/>

            <article className="populares">
                <div className="titulo-bg">
                    <div className="titulo container">
                        <p className="font-2-l-b cor-5">os mais alugados de nossa frota</p>
                        <h1 className="container font-1-xxl cor-0">populares<span className="cor-p1">.</span></h1>
                    </div>
                </div>

                <div className="mais-alugados">
                    <CardsWhite/>
                </div>
            </article>

            <Vantagem/>
            <Marca/>
        </>
    )
}

export default Home;