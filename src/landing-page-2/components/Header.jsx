import React, { useState } from "react";
import NavList from "./NavList.jsx";
const logo = require("../img/logo.png");

export default function Header({ isMobile }) {
   const [openMenu, setOpenMenu] = useState(false);
   const handleOpenMenu = () => {
      setOpenMenu(!openMenu);
   };
   return (
      <header>
         <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center py-5">
               <div className="w-32 md:w-full">
                  <img src={logo} alt="logo" />
               </div>
               {openMenu && <NavList handleOpenMenu={handleOpenMenu} />}
               {!isMobile && <NavList handleOpenMenu={handleOpenMenu} />}
               <div className={!isMobile ? "md:hidden" : ""}>
                  <svg
                     onClick={handleOpenMenu}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth={2}
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  </svg>
               </div>
            </nav>
         </div>
      </header>
   );
}
