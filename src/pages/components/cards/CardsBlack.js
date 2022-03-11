import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function CardsBlack() {
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
                        <div className="carros-bg">
                            <div className="carros container">
                                <div className="carros-imagem">
                                    <img src={carItem.img} alt={carItem.category}/>
                                </div>
                                <div className="carros-informacoes">
                                    <div>
                                        <h2 className="font-h2 cor-0">{carItem.title}</h2>
                                        <ul className="font-h4 cor-1">
                                            <li>
                                                <img src="./img/icones/motor.png" alt=""/>
                                                {carItem.category}
                                            </li>
                                            <li>
                                                <img src="./img/icones/rastreador.svg" alt=""/>
                                                {carItem.localization}
                                            </li>
                                        </ul>
                                        <p className="font-text-1 cor-1">{carItem.description}</p>
                                    </div>
                                    <Link className="botao seta" to="/esportivos">Mais Sobre</Link>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                })
            }
        </>
    )
}

export default CardsBlack;