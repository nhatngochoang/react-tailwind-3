import React from "react";

export default function NavList({ handleOpenMenu }) {
   return (
      <>
         <ul
            className="fixed top-0 left-0 w-[100vw] h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-90
               md:bg-transparent md:h-auto md:justify-between md:static md:flex md:flex-row z-10
               "
         >
            <div>
               <svg
                  onClick={handleOpenMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </div>
            <li className="m-12 md:m-0">
               <a
                  className="text-white md:text-black hover:text-red-500 transition duration-400 ease-in"
                  href="#home"
               >
                  Home
               </a>
            </li>
            <li className="m-12 md:m-0">
               <a
                  className="text-white md:text-black hover:text-red-500 transition duration-400 ease-in"
                  href="#product"
               >
                  Product
               </a>
            </li>
            <li className="m-12 md:m-0">
               <a
                  className="text-white md:text-black hover:text-red-500 transition duration-400 ease-in"
                  href="#faq"
               >
                  FAQ
               </a>
            </li>
            <li className="m-12 md:m-0">
               <a
                  className="text-white md:text-black hover:text-red-500 transition duration-400 ease-in"
                  href="#contact"
               >
                  Contact
               </a>
            </li>
         </ul>
      </>
   );
}
