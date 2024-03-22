
import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx";

const Portfolio = () => {
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
   return (<>
      <header className="absolute w-full">
         <div className="container">
            <Navbar isMobile={isMobile} />
         </div>
      </header>
      <Banner />
      <About isMobile={isMobile} />
      <Work />
      {/* footer  */}
      <footer id="footer">
         <Contact isMobile={isMobile} />
      </footer>
   </>);
}

export default Portfolio;