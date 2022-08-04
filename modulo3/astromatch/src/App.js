import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React  from 'react';
import {useCookies} from 'react-cookie'


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const autToken = cookies.autToken

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {autToken && <Route path="/onBoarding" element={<OnBoarding/>}/>}
      </Routes>
    </BrowserRouter>
  )
};

export default App;
