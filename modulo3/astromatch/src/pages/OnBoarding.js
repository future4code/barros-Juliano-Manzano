import React  from 'react'
import {useState} from 'react'
import Nav from '../components/Nav'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const OnBoarding = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState ({
        id_usuario: '',
        nome: '',
        dia: '',
        mes_nascimento: '',
        ano_nascimento: '',
        mostrar_genero: false,
        identidade_sexual: 'Homem',
        interesse_sexual: "Mulher",
        email: '',
        url: '',
        sobre: '',
        matches: []
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('clicado')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange =(e) => {
        console.log('e',e)
        const value = e.target.value === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        console.log(value,name);
        
        setFormData((prevState) =>({
            ...prevState,
            [name]: value
        }))
    }
    console.log(formData);


    return (
        <>
            <Nav minimo={true}
                 setShowModal={() => {}}
                 showModal={false}
            />
            <div className='onboarding'>
                <h2>CRIAR CONTA</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            required={true}
                            value={formData.nome}
                            onChange={handleChange}
                        />

                        <label>Nascimento</label>
                        <div className='multiplas-entrada'>
                            <input
                                id="dia"
                                type="number"
                                name="dia_nascimento"
                                placeholder="DD"
                                required={true}
                                value={formData.dia}
                                onChange={handleChange}
                            />
                            <input
                                id="mes"
                                type="number"
                                name="mes_nascimento"
                                placeholder="MM"
                                required={true}
                                value={formData.mes_nascimento}
                                onChange={handleChange}
                            />
                            <input
                                id="ano"
                                type="number"
                                name="ano_nascimento"
                                placeholder="AAAA"
                                required={true}
                                value={formData.ano_nascimento}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <label>Gênero</label>
                        <div className='multiplas-entrada'>
                            <input
                                id="identidade-genero-homem"
                                type="radio"
                                name="identidade-sexual"
                                value="Homem"
                                onChange={handleChange}
                                checked={formData.identidade_sexual === "Homem"}
                            />
                            <label htmlFor="identidade-genero-homem">Homem</label>
                            <input
                                id="identidade-genero-mulher"
                                type="radio"
                                name="identidade-sexual"
                                value="Mulher"
                                onChange={handleChange}
                                checked={formData.identidade_sexual === "Mulher"}
                            />
                            <label htmlFor="identidade-genero-mulher">Mulher</label>
                            <input
                                id="identidade-genero-outro"
                                type="radio"
                                name="identidade-sexual"
                                value="Outros"
                                onChange={handleChange}
                                checked={formData.identidade_sexual === "Outros"}
                            />
                            <label htmlFor="identidade-genero-outro">Outros</label>
                        </div>
                        <label htmlFor="mostrar-genero">Mostrar gênero no meu perfil</label>
                        <input
                            id="mostrar-genero"
                            type="checkbox"
                            name="mostrar-genero"
                            onChange={handleChange}
                            checked={formData.mostrar_genero}
                        />
                        <label>Interesse</label>
                        <div className='multiplas-entrada'>
                            <input
                                id="interesse-genero-homem"
                                type="radio"
                                name="interesse-sexual"
                                value="Homem"
                                onChange={handleChange}
                                checked={formData.interesse_sexual === "Homem"}
                            />
                            <label htmlFor="interesse-genero-homem">Homem</label>
                            <input
                                id="interesse-genero-mulher"
                                type="radio"
                                name="interesse-sexual"
                                value="Mulher"
                                onChange={handleChange}
                                checked={formData.interesse_sexual === "Mulher"}
                            />
                            <label htmlFor="interesse-genero-mulher">Mulher</label>
                            <input
                                id="interesse-genero-todos"
                                type="radio"
                                name="interesse-sexual"
                                value="Todos"
                                onChange={handleChange}
                                checked={formData.interesse_sexual === "Todos"}
                            />
                            <label htmlFor="interesse-genero-todos">Todos</label>
                        </div>
                        <label htmlFor="sobre">Sobre mim</label>
                        <input
                            id="sobre"
                            type="text"
                            name="sobre"
                            required={true}
                            placeholder="Eu gosto de..."
                            value={formData.sobre}
                            onChange={handleChange}
                        />
                        <input type="submit"/>
                    </section>
                    
                    <section>
                        <label htmlFor="sobre">Foto de Perfil</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="foto-perfil">
                            {formData.url && <img src={formData.url} alt='Foto de Perfil'/>}
                        </div>

                    </section>
                </form>
            
            </div>
        
        </>
        
    )
}

export default OnBoarding;