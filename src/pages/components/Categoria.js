import ListCategory from "./cards/ListCategory";
import TitleBgWhite from "./titles/TitleBgWhite";

function Categoria() {
    const title = {span: "As suas novas emoções começam aqui", title: "categorias"}
    return (
        <article className="carros-lista">
           <TitleBgWhite {...title}/>
            <ul>
                <ListCategory/>
            </ul>
        </article>
    )
}

export default Categoria;