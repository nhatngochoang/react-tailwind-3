import { useState } from "react";
import { BsSunFill } from "react-icons/bs"
import { HiOutlineMenu } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md"
import { FaMoon } from "react-icons/fa"
import useDarkMode from "../../useDarkMode.js";
import ToggleButton from "../ToggleButton.jsx";
const NavBar = ({ isMobile }) => {
   const [openMenu, setOpenMenu] = useState(false)

   const [isDarkMode, toggleDarkMode] = useDarkMode()

   return (
      <nav className="flex items-center md:ml-[5%]">
         <div className="flex items-center">
            <div className="text-20 font-bold mr-2">NerdCard</div>
            {isDarkMode
               ? <BsSunFill className="cursor-pointer"
                  size={"24px"}
                  color={"#e9c46a"}
                  onClick={() => toggleDarkMode(!isDarkMode)}
               />
               : <FaMoon className="cursor-pointer"
                  size={"24px"}
                  color={"#e9c46a"}
                  onClick={() => toggleDarkMode(!isDarkMode)}
               />
            }
            <div className="absolute top-[-2px] left-[250px]">
               <ToggleButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
         </div>
         <ul className="md:flex md:gap-16 ml-auto text-16 font-semibold md:ml-[62%]">
            {openMenu && isMobile ?
               <MdOutlineClose className="cursor-pointer"
                  size={"24px"}
                  onClick={() => setOpenMenu(!openMenu)} />
               : !openMenu && isMobile ?
                  <HiOutlineMenu className="cursor-pointer"
                     size={"24px"}
                     onClick={() => setOpenMenu(!openMenu)}
                  />
                  : (<>
                     <li className="navbar-list-item">Features</li>
                     <li className="navbar-list-item">Menu</li>
                     <li className="navbar-list-item">Our Story</li>
                     <li className="navbar-list-item">Contact</li>
                  </>)
            }
            {openMenu &&
               <div className="absolute right-[8%] bg-white p-8 text-center z-10 text-black text-13">
                  <li className="cursor-pointer">Features</li>
                  <li className="cursor-pointer">Menu</li>
                  <li className="cursor-pointer">Our Story</li>
                  <li className="cursor-pointer">Contact</li>
               </div>
            }
         </ul>
      </nav>
   );
}

export default NavBar;