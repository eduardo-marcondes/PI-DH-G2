import Categoria from "./components/Categoria";
import {Helmet} from "react-helmet-async";
import Populars from "./components/Populars";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import Marca from "./components/Marca";
import InputDate from "./components/forms/InputDate";

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
                            <InputDate/>
                            <input type="text" id="local" name="local" placeholder="Local"/>
                            {/*<input type="date" id="retirada" name="retirada" placeholder="Retirada"/>*/}
                            {/*<input type="date" id="devolucao" name="devolucao" placeholder="Devolucao"/>*/}
                            <input type="submit" className="botao" value="CONSULTAR"/>
                        </div>

                    </div>
                </article>


                <Categoria/>

                <Populars/>

                <Marca/>
            </main>
        </>
    )
}

export default Home;