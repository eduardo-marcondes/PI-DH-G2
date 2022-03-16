import TitleBgBlack from "./titles/TitleBgBlack";
import CardsAnimation from "./cards/CardsAnimation";
import CardsBlack from "./cards/CardsBlack";

function Populars() {
    const title = {span: "os mais alugados de nossa frota", title: "populares"}
    return (
        <>
            <article className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title}/>
                    <div className="mais-alugados">
                        <CardsAnimation/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Populars;