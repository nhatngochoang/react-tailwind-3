import Button from "./Button.jsx";
import logo from '../assets/img/logo.svg'
import { useEffect, useState } from "react";

const Navbar = ({ isMobile }) => {
   const [openMenu, setOpenMenu] = useState(false)
   const handleOpenMenu = () => {
      setOpenMenu(!openMenu)
   }
   useEffect(() => {
      if (!isMobile) {
         setOpenMenu(true)
      } else {
         setOpenMenu(false)
      }
   }, [isMobile])

   return (
      <nav className="flex justify-between items-center py-[20px]">
         {/* logo */}
         <div>
            <img
               className="w-[57px] h-[57px] object-cover"
               src={logo} alt="website logo" />
         </div>
         {/* links */}
         <ul className={`fixed top-0 left-0 w-3/5 h-full bg-gray-var z-[5] smooth md:absolute md:left-[40%] md:bg-transparent md:flex md:flex-row md:justify-end md:items-center md:text-[20px] ${openMenu ? '' : '-translate-x-full opacity-0'}`}>
            {/*  */}
            <li className="navbar__link"><a className="smooth hover:text-green-var" href="#aboutme" onClick={isMobile ? () => setOpenMenu(false) : () => { }}>About</a></li>
            <li className="navbar__link"><a className="smooth hover:text-green-var" href="#skill" onClick={isMobile ? () => setOpenMenu(false) : () => { }}>Skill</a></li>
            <li className="navbar__link"><a className="smooth hover:text-green-var" href="#works" onClick={isMobile ? () => setOpenMenu(false) : () => { }}>Work</a></li>
            <li className="navbar__link">
               <a className="smooth hover:text-green-light-var" href="#footer" onClick={isMobile ? () => setOpenMenu(false) : () => { }}>
                  <Button>Contact</Button>
               </a>
            </li>
         </ul>
         {/* menu button */}
         <div className="flex justify-center items-center w-[80x] h-[80px] smooth z-[6]"
            onClick={handleOpenMenu}>
            <div className={`navbar__icon smooth before:content-[''] after:content-[''] ${openMenu ? 'open smooth' : ''}`}></div>
         </div>
      </nav>
   );
}

export default Navbar;