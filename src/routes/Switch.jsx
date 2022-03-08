import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage.jsx'
import LandingPage from '../landing-page/LandingPage.js'
import Spotify from '../spotify/Spotify.jsx'

const Switch = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/landingPage' element={<LandingPage />} />
         <Route path='/spotify' element={<Spotify />} />
      </Routes>
   )
}

export default Switch
