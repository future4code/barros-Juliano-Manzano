import axios from "axios"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import RenderPlanetsList from "../../../components/renderPlanetsList/renderPlanetsList"
import useForm from "../../../hooks/useForm"
import useGetDate from "../../../hooks/useGetDate"
import useVerifyAuth from "../../../hooks/useVerifyAuth"
import { ApplyButton, ApplyFormContainer, ApplyInput, ApplyText } from "../../trips/AplicationFormPage/styles"

export default function CreateTripPage() {
    useVerifyAuth()

    const [form, handleUserInput] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const navigate = useNavigate()

    const createTrip = (e) => {
        e.preventDefault()

        const token = window.localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.durationInDays
        }

        axios
            .post(`${apiUrl}${student}trips`, body, header)
            .then((res) => {
                navigate('/admin/trips/list')
            })
            .catch((err) => {
                
            })
    }

    const dateToday = useGetDate()

    return (
        <div>
            <ApplyText>Criar Viagem</ApplyText>
            <ApplyFormContainer onSubmit={createTrip}>
                <ApplyInput
                    name='name'
                    placeholder="Digite o nome"
                    title='5 caracteres ou mais'
                    onChange={handleUserInput}
                    value={form.name}
                    pattern=".{5,}"
                    required
                />
                <RenderPlanetsList
                    value={form.planet}
                    handleUserInput={handleUserInput}
                />
                <ApplyInput
                    name='date'
                    placeholder="Data"
                    type='date'
                    min={dateToday}
                    onChange={handleUserInput}
                    value={form.date}
                    required
                />
                <ApplyInput
                    name='description'
                    placeholder="Descrição"
                    title="30 caracteres ou mais"
                    pattern=".{30,}"
                    onChange={handleUserInput}
                    value={form.description}
                    required
                />
                <ApplyInput
                    name='durationInDays'
                    type='number'
                    placeholder="Duração (em dias)"
                    min='50'
                    onChange={handleUserInput}
                    value={form.durationInDays}
                    required
                />
                <ApplyButton>Salvar</ApplyButton>
            </ApplyFormContainer>
        </div>
    )
}