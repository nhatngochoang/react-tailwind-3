import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage.jsx'
import LandingPage from '../landing-page/LandingPage.js'
import LandingPage2 from '../landing-page-2/LandingPage2.js'
import Spotify from '../spotify/Spotify.jsx'
import TikTok from '../tiktok/TikTok.jsx'
import Portfolio from '../portfolio/Portfolio.jsx'

const Switch = () => {

   return (
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/landingPage' element={<LandingPage />} />
         <Route path='/spotify' element={<Spotify />} />
         <Route path='/tiktok' element={<TikTok />} />
         <Route path='/landingPage2' element={<LandingPage2 />} />
         <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
   )
}

export default Switch
