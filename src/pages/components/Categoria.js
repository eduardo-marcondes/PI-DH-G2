import ListCategory from "./cards/ListCategory";
import TitleBgWhite from "./titles/TitleBgWhite";

function Categoria() {
    const title = {span: "As suas novas emoções começam aqui", title: "categorias"}
    return (
        <section className="carros-lista">
            <div className="container">
                <TitleBgWhite {...title}/>
                <ul>
                    <ListCategory/>
                </ul>
            </div>
        </section>
    )
}

export default Categoria;