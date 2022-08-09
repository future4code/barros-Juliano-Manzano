import React from 'react'
import {useNavigate} from 'react-router-dom'

function TripList() {
  const navigate = useNavigate()

    const goToHome = () =>{
         navigate(-1)
     }
    
    const goToVoltar = () =>{
      navigate('/')
    }

  return (

    <div><h1>Lista de Viagens</h1>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToVoltar}>Voltar</button>

    </div>
  )
}

export default TripList;