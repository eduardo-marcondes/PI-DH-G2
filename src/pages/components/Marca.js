import TitleBgWhite from "./titles/TitleBgWhite";

function Marca() {
    const title = {span: "luxo e personalidade", title: "marcas"}
    return (
        <section className="parceiros" aria-label="Nossos Parceiros">
            <TitleBgWhite {...title}/>
            <ul>
                <li><img src="./img/parceiros/audi.svg" alt="Audi"/></li>
                <li><img src="./img/parceiros/audi.png" alt="Audi"/></li>
                <li><img src="./img/parceiros/bmw.png" alt="BMW"/></li>
                <li><img src="./img/parceiros/dodge.png" alt="Dodge"/></li>
                <li><img src="./img/parceiros/ford.png" alt="Ford"/></li>
                <li><img src="./img/parceiros/gmc.png" alt="GMC"/></li>
                <li><img src="./img/parceiros/jeep.png" alt="Jeep"/></li>
                <li><img src="./img/parceiros/porsche.png" alt="Porsche"/></li>
            </ul>
        </section>
    )
}

export default Marca;