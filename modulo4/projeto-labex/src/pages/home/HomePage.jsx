
import { HomeText, MainHomeButtons, MainHomeButtonsContainer, MainHomePageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()

    const goToTripsPage = () =>{
        navigate('/trips/list')
    }
    return (
        <MainHomePageContainer>
            <HomeText>Ao infinito e além !</HomeText>
            <MainHomeButtonsContainer>
                <MainHomeButtons onClick={goToTripsPage}
                >Destinos</MainHomeButtons>
            </MainHomeButtonsContainer>
        </MainHomePageContainer>        
    )
};