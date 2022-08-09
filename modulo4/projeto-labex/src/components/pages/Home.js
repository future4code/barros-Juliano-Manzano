import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

    const goToListTrips = () =>{
         navigate("/trips/list")
     }

     const goToAdmin = () =>{
         navigate("/login")
     }
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={goToAdmin}>Login</button>
      <button onClick={goToListTrips}>Viagens</button>

    </div>
  )
}

export default Home;