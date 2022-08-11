import { useNavigate } from "react-router-dom"

const ErrorPage = () =>{
    const navigate = useNavigate()
    const goBackHome = () => {
        navigate('/')
    }

    return(
        <div>
            <button onClick={goBackHome}>HOME</button>
            <h2>AGO DE ERRADO, NÃO ESTÁ CERTO !!</h2>
        </div>
    )
}

export default ErrorPage;