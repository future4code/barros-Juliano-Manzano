import axios from "axios"
import { apiUrl, student } from "../App"
import { useState, useEffect } from "react"
import load from "../components/loading/Loading"

const useGetTrips = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
            axios
                .get(`${apiUrl}${student}trips`)
                .then((res) => {
                    setTrips(res.data.trips)
                    setLoading(true)
                   
                })
                .catch((e) => {
                    
                })
    }, [])
        
    return (
        
        
         trips
        
       
              
        
    ) 
}

export default useGetTrips;