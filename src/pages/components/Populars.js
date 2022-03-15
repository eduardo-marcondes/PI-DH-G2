import TitleBgBlack from "./titles/TitleBgBlack";
import CardsWhite from "./cards/CardsWhite";
import CardsBlack from "./cards/CardsBlack";

function Populars() {
    const title = {span: "os mais alugados de nossa frota", title: "populares"}
    return (
        <>
            <section className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title}/>
                    <div className="mais-alugados">
                        <CardsBlack/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Populars;