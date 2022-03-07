import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function AllCards() {
    const [carsResult, isLoading] = useApis('./jsons/popular.json');

    //resultado pode ser nulo ou vazio ate carregar
    const cars = carsResult?.carsList || [];
    //carregando
    if (isLoading) return 'Loading';

    return (
        <>
            {
                cars.map((carItem, key) => {
                    return <React.Fragment key={key}>
                        <div className="carros container">
                            <div className="carros-imagem">
                                <img src={carItem.img} alt={carItem.category}/>
                            </div>
                            <div className="carros-informacoes">
                                <div>
                                    <h2 className="font-1-xl">{carItem.title}</h2>
                                    <ul className="font-1-m cor-8">
                                        <li>
                                            <img src="./img/icones/motor.png" alt=""/>
                                            {carItem.category}
                                        </li>
                                        <li>
                                            <img src="./img/icones/rastreador.svg" alt=""/>
                                            {carItem.localization}
                                        </li>
                                    </ul>
                                    <p className="font-2-s cor-8">{carItem.description}</p>
                                </div>
                                <Link className="botao seta" to="/suvs">Mais Sobre</Link>
                            </div>
                        </div>
                    </React.Fragment>
                })
            }
        </>
    )
}

export default AllCards;