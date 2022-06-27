import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h3 className='negr'>{ props.descricao}</h3>
                <p>{ props.desc}</p>
            </div>
        </div>
    )
}

export default CardPequeno;