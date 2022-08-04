import React  from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
import AutModal from '../components/AutModal'
import {useCookies} from "react-cookie"


const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [seInscreva, setInscrever] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const autToken = cookies.autToken

    const botao1Clicado = () => {
        if (autToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('autToken',cookies.autToken)
            window.location.reload();
            return
        }
        console.log("clicado no botao 1");
        setShowModal(true)
        setInscrever(true)
    }

    return (
        <div className='sobreposição'>
            <Nav 
                 autToken={autToken}
                 minimo={false}
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
    )
};

export default Home;