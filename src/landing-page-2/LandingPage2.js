import React, { useEffect, useState } from 'react'
import AppImage from './components/AppImage.jsx'
import Banner from './components/Banner.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

export default function LandingPage2() {
   const [windowSize, setWindowSize] = useState({
      width: undefined,
      heigt: undefined
   })
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
      const handleWindowSize = () => {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
         })
      }
      window.addEventListener("resize", handleWindowSize)
      handleWindowSize()
      return () => {
         window.removeEventListener("resize", handleWindowSize)
      }
   }, [])

   useEffect(() => {
      if (windowSize.width < 500) {
         setIsMobile(true)
      } else {
         setIsMobile(false)
      }
   }, [windowSize.width])
   return (
      <div className="overflow-x-hidden">
         <Header isMobile={isMobile} />
         <Banner />
         <AppImage isMobile={isMobile} />
         <Download />
         <Footer isMobile={isMobile} />
      </div>
   )
}
