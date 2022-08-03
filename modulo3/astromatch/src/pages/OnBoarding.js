import React  from 'react';
import {useState} from 'react';
import Nav from '../components/Nav';



const OnBoarding = () => {

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

    const handleSubmit =() => {
        console.log('clicado');
    }
    const handleChange =(e) => {
        console.log('e',e)
        const value = e.target.value
        const name = e.target.nome
        console.log('valor' + value,'name' + name);
        setFormData((prevState) =>({
            ...prevState
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
                                type=""
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
                                checked={false}
                            />
                            <label htmlFor="identidade-genero-homem">Homem</label>
                            <input
                                id="identidade-genero-mulher"
                                type="radio"
                                name="identidade-sexual"
                                value="Mulher"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="identidade-genero-mulher">Mulher</label>
                            <input
                                id="identidade-genero-outro"
                                type="radio"
                                name="identidade-sexual"
                                value="outro"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="identidade-genero-outro">Outro</label>
                        </div>
                        <label htmlFor="mostrar-genero">Mostrar gênero no meu perfil</label>
                        <input
                            id="mostrar-genero"
                            type="checkbox"
                            name="mostrar-genero"
                            onChange={handleChange}
                            checked={false}
                        />
                        <label>Interesse</label>
                        <div className='multiplas-entrada'>
                            <input
                                id="interesse-genero-homem"
                                type="radio"
                                name="interesse-sexual"
                                value="Homem"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="interesse-genero-homem">Homem</label>
                            <input
                                id="interesse-genero-mulher"
                                type="radio"
                                name="interesse-sexual"
                                value="Mulher"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="interesse-genero-mulher">Mulher</label>
                            <input
                                id="interesse-genero-todos"
                                type="radio"
                                name="interesse-sexual"
                                value="todos"
                                onChange={handleChange}
                                checked={false}
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
                            <img src={formData.url} alt='Foto de Perfil'/>
                        </div>

                    </section>
                </form>
            
            </div>
        
        </>
        
    )
}

export default OnBoarding;