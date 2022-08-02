import React  from 'react';
import brancoLogo from '../images/logo-astromat-branco.png'
import corLogo from '../images/logo-astromat-cor.png'


const Nav = ({minimo, autToken, setShowModal, showModal}) => {

    const botaoNavClicado = () => {
        setShowModal(true)
    }

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={minimo ? corLogo : brancoLogo} alt='logo'/>
            </div>
            {!autToken && !minimo && <button 
                className='botao-nav'
                onClick={botaoNavClicado}
                disabled={showModal}
            >Entrar</button>}
        </nav>
    )
}

export default Nav;