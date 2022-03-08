import ListCategory from "./cards/ListCategory";

function Categoria(){
    return(
        <article className="carros-lista">
            <div className="titulo container">
                <p className="font-2-l-b cor-5">As suas novas emoções começam aqui</p>
                <h2 className="container font-1-xxl">categorias<span className="cor-p1">.</span></h2>
            </div>
            <ul>
                <ListCategory/>
            </ul>
        </article>
    )
}

export default Categoria;