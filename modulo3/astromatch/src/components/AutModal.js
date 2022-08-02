import React  from 'react';
import {useState} from 'react';


const AutModal = ({setShowModal}) => {

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmaSenha, setConfirmaSenha] = useState(null)
    /*const [error, setError] = useState(null)*/

    console.log(email, senha, confirmaSenha);
    

    const botao1Clicado = () => {
        setShowModal(false)
    }
    
    const handleSubmit =(e) => {
        e.preventDefault()
    }

    const seInscrito = true

    return (
        <div className="aut-Modal">
            <div className='botao-icone-fechar' onClick={botao1Clicado}>&otimes;</div>
            <h2>{seInscrito ? 'CRIE UMA CONTA' : 'ENTRAR'}</h2>
            <p>Ao clicar em ENTRAR, você concorda com os termos de matchs extraterrestes. Respeitar as políticas de privacidades e política de cookies galáticos.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='senha'
                    id='senha'
                    name='senha'
                    placeholder='Senha'
                    required={true}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <input
                    type='comfirma-senha'
                    id='comfirma-senha'
                    name='comfirma-senha'
                    placeholder='comfirma-senha'
                    required={true}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                />

            </form>

            AutModal
        </div>
    )
}

export default AutModal;