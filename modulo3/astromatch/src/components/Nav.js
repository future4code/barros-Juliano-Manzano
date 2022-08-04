import React  from 'react';
import brancoLogo from '../images/logo-astromat-branco.png'
import corLogo from '../images/logo-astromat-cor.png'


const Nav = ({autToken, minimo, setShowModal, showModal, setInscrever}) => {

    const botaoNavClicado = () => {
        setShowModal(true)
        setInscrever(false)
    };

    return (
        <nav>
            <div className='logo-container'>
                <img 
                className='logo'
                src={minimo ? corLogo : brancoLogo}
                alt='logo'
                />
            </div>
            {!autToken && !minimo && (
            <button 
                className='botao-nav'
                onClick={botaoNavClicado}
                disabled={showModal}
            >Entrar</button>
        )}
        </nav>
    );
};

export default Nav;