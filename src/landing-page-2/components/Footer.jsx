import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const logo = require("../img/logo.png");

export default function Footer({ isMobile }) {
   return (
      <section className="text-center relative">
         <div>
            <div className="relative transform top-1/2 left-1/2 -translate-x-1/3 md:mt-8">
               <img src={logo} alt="logo" />
            </div>
            {isMobile ? (
               <div>
                  <a
                     href="tel:012323453"
                     className="flex flex-row justify-center items-center gap-2"
                  >
                     <div className="ml-[2%]">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                     </div>
                     <div>0123-123-123</div>
                  </a>
                  <a
                     href="mailto:info@example.com"
                     className="flex flex-row justify-center items-center gap-2"
                  >
                     <div className="ml-[6%]">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                     </div>
                     <p>info@me.com</p>
                  </a>
               </div>
            ) : (
               <div className="flex flex-row justify-end gap-8 absolute right-[10%] top-[22%]">
                  <a href="tel:012323453">
                     <div className="ml-[2%]">
                        <FontAwesomeIcon icon={faTwitter} color="#FA4A0C" fontSize="40px" />
                     </div>
                  </a>
                  <a href="mailto:info@example.com">
                     <div className="ml-[6%]">
                        <div className="ml-[2%]">
                           <FontAwesomeIcon icon={faFacebook} color="#FA4A0C" fontSize="40px" />
                        </div>
                     </div>
                  </a>
                  <a href="mailto:info@example.com">
                     <div className="ml-[6%]">
                        <div className="ml-[2%]">
                           <FontAwesomeIcon icon={faInstagram} color="#FA4A0C" fontSize="40px" />
                        </div>
                     </div>
                  </a>
               </div>
            )}
         </div>
         <div>
            <p>Copywright 2020 .com</p>
         </div>
      </section>
   );
}
