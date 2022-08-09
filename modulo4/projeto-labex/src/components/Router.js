import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminHome from './pages/AdminHome';
import DetailsTrip from './pages/DetailsTrip';
import Form from './pages/Form';
import Home from "./pages/Home"
import Login from './pages/Login';
import TripCreate from './pages/TripCreate';
import TripList from './pages/TripList';



function Router() {
  return (
    
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/trips/list' element={<TripList/>}/>
                <Route path='/trips/application' element={<Form/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin/trips/create' element={<TripCreate/>}/>
                <Route path='/admin/trips/list' element={<AdminHome/>}/>
                <Route path='/admin/trips/:id' element={<DetailsTrip/>}/>
            </Routes>
        </BrowserRouter>
    </>

  );
}

export default Router;