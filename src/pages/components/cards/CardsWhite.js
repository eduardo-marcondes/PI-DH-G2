import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function CardsWhite() {
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
                        <div className="populars container">
                            <div className="populars-imagem">
                                <img src={carItem.img} alt={carItem.category}/>
                            </div>
                            <div className="populars-informacoes">
                                <h2 className="font-h2">{carItem.title}</h2>
                                <ul className="font-h4 cor-8">
                                    <li>
                                        <img src="./img/icones/carro.png" alt="icon car model"/>
                                        {carItem.category}
                                    </li>
                                    <li>
                                        <img src="./img/icones/local.svg" alt="icon local"/>
                                        {carItem.localization}
                                    </li>
                                </ul>

                                    <p className="font-text-1 cor-8 card_overlay">{carItem.description}</p>

                                <div className="card_header">
                                    <Link className="botao seta" to="/suvs">Mais Sobre</Link>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                })
            }
        </>
    )
}

export default CardsWhite;