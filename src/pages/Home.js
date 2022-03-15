import Marca from "./components/Marca";
import Vantagem from "./components/Vantagem";
import Categoria from "./components/Categoria";
import {Helmet} from "react-helmet-async";
import Populars from "./components/Populars";
import TitleBgBlack from "./components/titles/TitleBgBlack";

function Home() {
    const title = {span: "Viaje com estilo", title: "faça já sua reserva"}
    return (
        <>
            <Helmet>
                <title>Digital Booking - Luxury Cars</title>
            </Helmet>
            <main>
                <div className="introducao-bg">
                </div>

                <article className="bg-black">
                    <div className="container">
                        <TitleBgBlack {...title}/>
                        <div className="form form-home">
                            <input type="text" id="local" name="local" placeholder="Local"/>
                            <input type="date" id="retirada" name="retirada" placeholder="Retirada"/>
                            <input type="date" id="devolucao" name="devolucao" placeholder="Devolucao"/>
                            <input type="submit" className="botao" value="CONSULTAR"/>
                        </div>
                    </div>
                </article>


                <Categoria/>

                <Populars/>
            </main>
        </>
    )
}

export default Home;