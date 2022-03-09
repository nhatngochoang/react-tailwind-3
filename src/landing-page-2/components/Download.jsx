import React from "react";

export default function Download() {
   return (
      <section className="text-center">
         <div className=" min-h-[564px] bg-[#252B42] md:bg-[url('./landing-page-2/img/download.png')] flex items-center justify-center">
            <div>
               <h1 className="text-white px-10 mb-8">Download the app now.</h1>
               <p className="text-[#BDBDBD] px-[70px]">
                  Available on your favorite store. Start your premium experience now
               </p>
               <div className="mt-8">
                  <button className="mx-2 text-white text-[16px] px-[31px] py-[18px] bg-[#FA4A0C] border border-transparent rounded-md hover:bg-transparent hover:border-white transition-all">
                     Playstore
                  </button>
                  <button className="mx-2 text-white text-[16px] px-[31px] py-[18px] bg-[#FA4A0C] border border-transparent rounded-md hover:bg-transparent hover:border-white transition-all">
                     Try for Free
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
