import React  from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const AutModal = ({setShowModal, seInscreva}) => {

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmaSenha, setConfirmaSenha] = useState(null)
    const [error, setError] = useState(null)
    const [ cookies, setCookie, removeCookie] = useCookies(null)

    let navigate = useNavigate()
    console.log(email, senha, confirmaSenha);
    
    const botao1Clicado = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            if (seInscreva && (senha !== confirmaSenha)) {
                setError ('Senha precisa ser igual!')
                return
            }
            console.log('faça uma solicitação para o banco de dados');
            const response = await axios.post(`http://localhost:8000/${seInscreva ? 'inscrever' : 'entrar'}`, { email, senha })

            setCookie('autToken', response.data.token)
            setCookie('UserId', response.data.userId)

            const success = response.status === 201
            if (success && seInscreva) navigate ('/onBoarding')
            if (success && !seInscreva) navigate ('/dashboard')

            window.location.reload()

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="aut-Modal">
            <div className='botao-icone-fechar' onClick={botao1Clicado}>&otimes;</div>
            <h2>{seInscreva ? 'CRIE UMA CONTA' : 'ENTRAR'}</h2>
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
                {seInscreva && <input
                    type='comfirma'
                    id='comfirma-senha'
                    name='comfirma-senha'
                    placeholder='comfirma-senha'
                    required={true}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                />}
                <input classeName="botao-3" type='submit'/>
                <p>{error}</p>

            </form>
            <hr/>
            <h2>FAZENDO CONTATO</h2>

        </div>
    )
}

export default AutModal;