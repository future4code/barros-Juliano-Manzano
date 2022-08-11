import HomePage from "../pages/home/HomePage";
import { MainAppContainer } from "../styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from '../pages/admin/LoginPage/LoginPage'
import ListTripsPage from "../pages/trips/ListTripsPage/ListTripsPage";
import AplicationFormPage from "../pages/trips/AplicationFormPage/AplicationFormPage";
import TripDetailsPage from "../pages/admin/AdminHomePage/TripDetailsPage";
import CreateTripPage from "../pages/admin/CreateTripPage/CreateTripPage";
import AdminHomePage from "../pages/admin/AdminHomePage/AdminHomePage";
import ErrorPage from "../pages/error/ErrorPage";
import Header from "../components/header/header";

export default function Router () {
    return (
        <MainAppContainer>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path='/error' element={<ErrorPage />} />
                    <Route path='/trips/list' element={<ListTripsPage />} />
                    <Route path='/trips/application' element={<AplicationFormPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/admin/trips/list' element={<AdminHomePage />} />
                    <Route path='/admin/trips/create' element={<CreateTripPage />} />
                    <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </MainAppContainer>
    )
}
