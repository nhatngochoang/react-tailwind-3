
import './LandingPage.css';
import Content from './components/Content/Content.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Slogan from './components/Slogan/Slogan.jsx';
import { useEffect, useState } from 'react';

function LandingPage() {
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
      <div className="font-sora h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-y-auto overflow-x-hidden">
         <NavBar isMobile={isMobile} />
         <Slogan />
         <Content />
      </div>
   );
}

export default LandingPage;
