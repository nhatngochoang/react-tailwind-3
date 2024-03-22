import React from "react";
const image = require("../img/app-img.png");
const screen1 = require("../img/app-1.png");
const screen2 = require("../img/app-2.png");
const screen3 = require("../img/app-3.png");

export default function AppImage({ isMobile }) {
   return (
      <>
         <div className="max-h-[500px]">
            <section>
               <div className="relative top-1/2 left/1-2 transform -translate-x-[8%] -translate-y-[14%] h-[80%] md:h-[60%] md:translate-x-[30%] md:-translate-y-[24%]">
                  <img src={image} alt="phone app screen" className="-z-10" />
                  <h2 className="mt-0 text-center translate-x-[8%] translate-y-[14%] md:-translate-x-[30%] md:-translate-y-[60%] md:text-[44px]">
                     How the app works
                  </h2>
               </div>
            </section>
         </div>
         <section className="p-4 text-center">
            <div>
               <hr className="mt-8" />
               <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:text-left md:mt-[20vh]">
                  <div className="pt-[65px] flex flex-col gap-8 md:px-[10%]">
                     <span className="text-[#FA4A0C]">Create an account</span>
                     <h2 className="text-bold text-[40px] leading-[57px] px-[38px] md:px-0 ">
                        Create/login to an existing account to get started
                     </h2>
                     <p className="px-[80px] text-[#737373] font-light md:px-0 ">
                        An account is created with your email and a desired password
                     </p>
                  </div>
                  <div>
                     <img className="md:w-[300px] md:mr-[200px]" src={screen1} alt="screen 1" />
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:text-left">
                  {!isMobile && (
                     <div>
                        <img className="md:w-[300px] md:ml-0" src={screen2} alt="screen 2" />
                     </div>
                  )}
                  <div className="pt-[65px] flex flex-col gap-8 md:pl-[20%]">
                     <span className="text-[#FA4A0C]">Explore while shopping</span>
                     <h2 className="text-bold text-[40px] leading-[57px] px-[38px] md:px-0">
                        Shop for your favorites meal as e dey hot.
                     </h2>
                     <p className="px-[80px] text-[#737373] font-light md:px-0">
                        Shop for your favorite meals or drinks and enjoy while doing it.
                     </p>
                  </div>
                  {isMobile && (
                     <div>
                        <img className="md:w-[300px] md:mr-[200px]" src={screen2} alt="screen 2" />
                     </div>
                  )}
               </div>
               <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:text-left md:mb-[100px] mb-16">
                  <div className="pt-[65px] flex flex-col gap-8 md:px-[10%]">
                     <span className="text-[#FA4A0C]">Checkout</span>
                     <h2 className="text-bold text-[40px] leading-[57px] px-[38px] md:px-0">
                        When you done check out and get it delivered.
                     </h2>
                     <p className="px-[80px] text-[#737373] font-light md:px-0">
                        When you done check out and get it delivered with ease.
                     </p>
                  </div>
                  <div>
                     <img className="md:w-[300px] md:mr-[200px]" src={screen3} alt="screen 3" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
