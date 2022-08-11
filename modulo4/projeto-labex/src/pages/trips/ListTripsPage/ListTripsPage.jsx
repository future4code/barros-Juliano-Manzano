import { useNavigate } from "react-router-dom"
import useGetTrips from "../../../hooks/useGetTrips"
import Loading from "../../../components/loading/Loading"
import { ListTripsContainer, TripCardName, TripCardsContainer, TripDesc, TripListButtons, TripListHeader, TripsCardFlex, TripsCardGrid, TripText, TripTextClick } from "./styles"

export default function ListTripsPage() {
    const navigate = useNavigate()

    const goToApplyPage = () => {
        navigate('/trips/application')
    }

    const trips = useGetTrips()

    const renderTrips = trips.map((trip) =>{
        return <TripCardsContainer key={trip.id}>
            <h3>{trip.name}</h3>
            <TripDesc>Descrição: {trip.description}</TripDesc>
            <p>Data: {trip.date}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Planeta: {trip.planet}</p>
        </TripCardsContainer>
    })
    
    return (
        <div>
            
            <TripsCardFlex>
            {renderTrips}
            </TripsCardFlex>
            <TripListHeader>
            <TripTextClick onClick={goToApplyPage}
            >Escolher viagem</TripTextClick>
            </TripListHeader>  
        </div>
    )
}