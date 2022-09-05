import { useNavigate } from "react-router-dom"
import { HeaderContainer, HeaderTextH1, HeaderTripsH1, HeaderLoginH1, HeaderHomeH1 } from "./styles"

const Header = () =>{
    const navigate = useNavigate()
    const goToLoginPage = () => {
        navigate('/login')
    }
    const goToHome = () => {
        navigate('/')
    }
    const goToTrips = () =>{
        navigate('/trips/list')
    }

    return(
        <HeaderContainer>
            <HeaderTextH1 
            onClick={goToHome} 
            >LabeX</HeaderTextH1>
            <HeaderHomeH1
            onClick={goToHome}
            >Home
            </HeaderHomeH1>
            <HeaderTripsH1
            onClick={goToTrips}
            >Viagens
            </HeaderTripsH1>
            <HeaderLoginH1 onClick={goToLoginPage}
            >Login</HeaderLoginH1>
        </HeaderContainer>
    )
}

export default Header