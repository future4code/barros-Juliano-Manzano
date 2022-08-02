import React  from 'react';
import Nav from '../components/Nav'
import { useState } from 'react';
import AutModal from '../components/AutModal';


const Home = () => {

    const [showModal, setShowModal] = useState(false)


    const autToken = false;

    const botao1Clicado = () => {
        console.log("clicado no botao 1");
        setShowModal(true)
    }

    return (
        <div className='sobreposição'>
            <Nav minimo={false} autToken={autToken} setShowModal={setShowModal} showModal={showModal}/>
        <div className='home'>
            <h1>Deslize para Direita&copy; </h1>
            <button className='botao-1' onClick={botao1Clicado}>
                {autToken ? 'Entrar' : 'Criar Conta'}
            </button>

            {showModal && (
                <AutModal setShowModal={setShowModal}/>
            )}

        </div>
        </div>
    );
}

export default Home;