import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import useVerifyAuth from "../../../hooks/useVerifyAuth"
import { ApplyButton } from "../../trips/AplicationFormPage/styles"
import { TripCardsContainer, TripDesc, TripsCardFlex, TripTextClick } from "../../trips/ListTripsPage/styles"

const TripDetailsPage = () => {
    useVerifyAuth()
    const tripId = useParams().id

    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }
    const token = window.localStorage.getItem('token')

    const header = {
        headers: {
            auth: token
        }
    }

    const [tripDetails, setTripDetails] = useState({})
    const [candidateDetails, setCandidateDetails] = useState([])
    const [approvedDetails, setApprovedDetails] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        axios
            .get(`${apiUrl}${student}trip/${tripId}`, header)
            .then(res => {
                setTripDetails(res.data.trip)
                setCandidateDetails(res.data.trip.candidates)
                setApprovedDetails(res.data.trip.approved)

                setUpdate(false)
            })
            .catch(err => {
                
            })
    }, [update])

    const handleUpdate = () => {
        setUpdate(true)
    }
    const approveCandidate = (e) => {
        const candidateId = e.target.name
        handleUpdate()

        decideCandidate(true, candidateId)
    }
    const refuseCandidate = (e) => {
        const candidateId = e.target.name
        handleUpdate()

        decideCandidate(false, candidateId)
    }

    const decideCandidate = (approve, id) => {
        const body = {
            "approve": approve
        }
        axios
            .put(`${apiUrl}${student}trips/${tripId}/candidates/${id}/decide`, body, header)
            .then((res) => {
                
            })
            .catch((err) => {
                
            })
    }

    return (
        <div>
            <TripTextClick onClick={goBackPage}>Voltar</TripTextClick>
            <TripsCardFlex>
                <TripCardsContainer>
                    <h2>Viagem</h2>
                    <p>Nome: {tripDetails.name}</p>
                    <TripDesc>Descrição: {tripDetails.description}</TripDesc>
                    <p>Data: {tripDetails.date}</p>
                    <p>Duração: {tripDetails.durationInDays}</p>
                    <p>Id: {tripDetails.id}</p>
                    <p>Planeta: {tripDetails.planet}</p>
                </TripCardsContainer>

                {candidateDetails.map((candidate) => {
                    return <TripCardsContainer key={candidate.id}>
                        <h2>Candidato</h2>
                        <h4>Nome: {candidate.name}</h4>
                        <p>Idade: {candidate.age}</p>
                        <TripDesc>Descrição: {candidate.applicationText}</TripDesc>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Id: {candidate.id}</p>
                        <ApplyButton value={true}
                            name={candidate.id}
                            onClick={approveCandidate}
                        >Aprovar</ApplyButton>
                        <ApplyButton
                            value={false}
                            name={candidate.id}
                            onClick={refuseCandidate}
                        >Rejeitar</ApplyButton>
                    </TripCardsContainer>
                })}
                <TripCardsContainer><h2>Aprovados</h2>
                    {approvedDetails.map((approved) => {
                        return <div key={approved.id}>
                            <p>{approved.name}</p>
                        </div>
                    })}</TripCardsContainer>
            </TripsCardFlex>
        </div>
    )
}

export default TripDetailsPage;