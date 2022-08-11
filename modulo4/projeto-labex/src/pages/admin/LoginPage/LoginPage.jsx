import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import useForm from "../../../hooks/useForm"
import { ApplyButton, ApplyFormContainer, ApplyInput, ApplyText } from "../../trips/AplicationFormPage/styles"

const LoginPage = ()=> {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token !== null){
            navigate('/admin/trips/list')
        }
    }, [])
    

    const [form, handleUserInput] = useForm({
        email: '',
        password: ''
    })

    const goToAdminHomePage = () => {
        navigate('/admin/trips/list')
    }
    
    const login = (e) => {
        e.preventDefault()

        const body = {
            "email": form.email,
            "password": form.password
        }
        axios
            .post(`${apiUrl}${student}login`, body)
            .then(res => {
                window.localStorage.setItem("token", res.data.token)
                goToAdminHomePage()
            })
            .catch(err => {
                
            })
    }

    return (
        <div>
            <ApplyText>Login</ApplyText>
            <ApplyFormContainer onSubmit={login}>
            <ApplyInput placeholder="E-mail"
                onChange={handleUserInput}
                name='email'
                type='email'
                value={form.email}
                required
            />
            <ApplyInput placeholder="Senha"
                onChange={handleUserInput}
                name='password'
                type='password'
                value={form.password}
                required
            />
            <ApplyButton>Entrar</ApplyButton>
            </ApplyFormContainer>
        </div>
    )
}

export default LoginPage;