import axios from "axios"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import { useState, useEffect } from "react"
import useVerifyAuth from "../../../hooks/useVerifyAuth"
import { TripCardsContainer, TripDesc, TripListHeader, TripsCardFlex, TripTextClick } from "../../trips/ListTripsPage/styles"
import { ApplyButton } from "../../trips/AplicationFormPage/styles"

export default function AdminHomePage() {
    useVerifyAuth()

    const navigate = useNavigate()
    const [trips, setTrips] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        axios
            .get(`${apiUrl}${student}trips`)
            .then((res) => {
                setTrips(res.data.trips)

                setUpdate(false)
            })
            .catch((e) => {
                
            })
    }, [update])

    const handleUpdate = () => {
        setUpdate(true)
    }

    const goBackHome = () => {
        navigate('/')
    }
    const goToCreateTripPage = () => {
        navigate('/admin/trips/create')
    }
    const goToTripDetailsPage = (e) => {
        const tripId = e.target.value

        navigate(`/admin/trips/${tripId}`)
    }
    const userLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }
    const deleteTrip = (e) => {
        const tripId = e.target.value
        const token = window.localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }

        axios
            .delete(`${apiUrl}${student}trips/${tripId}`, header)
            .then((res) => {
                handleUpdate()
            })
            .catch((err) => {
                
            })
    }

    const renderTripsButton = trips
        .map((trip) => {
            return <TripCardsContainer key={trip.id}>
                <h3>{trip.name}</h3>
                <TripDesc>Descrição: {trip.description}</TripDesc>
                <p>Data: {trip.date}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Planeta: {trip.planet}</p>
                <ApplyButton value={trip.id}
                    onClick={goToTripDetailsPage}
                >Selecionar
                </ApplyButton>
                <ApplyButton onClick={deleteTrip}
                    value={trip.id}>Remover</ApplyButton>
            </TripCardsContainer>
        })

    return (
        <div>
            <TripListHeader>
                <TripTextClick onClick={goBackHome}>Voltar</TripTextClick>
                <TripTextClick onClick={goToCreateTripPage}
                >Criar viagem</TripTextClick>
                <TripTextClick onClick={userLogout}
                >Logout</TripTextClick>
            </TripListHeader>
            <TripsCardFlex>
                {renderTripsButton}
            </TripsCardFlex>
        </div>
    )
}