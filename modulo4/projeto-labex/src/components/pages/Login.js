import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

    const goToVoltar = () =>{
         navigate(-1)
     }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={goToVoltar}>Voltar</button>
    </div>
  )
}

export default Login;