import TitleBgBlack from "./titles/TitleBgBlack";
import ListAllProducts from "./cards/ListAllProducts";

function Products() {
    const title = {span: "conheça nossa frota", title: "frota"}
    return (
        <>
            <section className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title}/>
                    <div className="produtos">
                        <ListAllProducts/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;