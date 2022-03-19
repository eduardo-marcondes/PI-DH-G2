import React from "react";
import {useApis} from "../../../../hooks/useApi";
import ListAllProducts from "./ListAllProducts";


function ListProductsFilterCategory({cat}) {
    const [categoryResult, isLoading] = useApis('./jsons/bd_frota_specs.json');
//resultado pode ser nulo ou vazio ate carregar
    const cars = categoryResult?.frotaList || [];
//carregando
    if (isLoading) return 'Loading';

    return (
        <>
            {
                cars.map((carCategory, key) => {
                    if (carCategory.category === cat) {
                        return carCategory.items.map((carItem) => {
                            return <ListAllProducts {...carItem} key={carItem.id}/>
                        })
                    } else if (cat === null) {
                        return carCategory.items.map((carItem) => {
                            return <ListAllProducts {...carItem} key={carItem.id}/>
                        })
                    }
                })
            }
        </>
    )
}

export default ListProductsFilterCategory;