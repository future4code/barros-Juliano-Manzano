import React  from 'react';
import Nav from '../components/Nav'
import { useState } from 'react';
import AutModal from '../components/AutModal';


const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [seInscreva, setInscrever] = useState(true)


    const autToken = false;

    const botao1Clicado = () => {
        console.log("clicado no botao 1");
        setShowModal(true)
        setInscrever(true)
    }

    return (
        <div className='sobreposição'>
            <Nav minimo={false}
                 setShowModal={setShowModal}
                 showModal={showModal}
                 setInscrever={setInscrever}
                 />
        <div className='home'>
            <h1 className='titulo-1'>Deslize para Direita</h1>
            <button className='botao-1' onClick={botao1Clicado}>
                {autToken ? 'Entrar' : 'Criar Conta'}
            </button>

            {showModal && (
                <AutModal setShowModal={setShowModal} seInscreva={seInscreva}/>
            )}

        </div>
        </div>
    );
}

export default Home;