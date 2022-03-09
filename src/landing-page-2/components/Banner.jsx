import React from "react";

export default function Banner() {
   return (
      <>
         <section>
            <div className="w-full bg-no-repeat bg-cover relative h-[620px] bg-[url('./landing-page-2/img/banner.png')]">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-9 text-white text-center">
                  <p className="text-xl mb-5">Food App</p>
                  <h1 className="text-4xl mb-5 font-semibold max-w-2xl md:leading-relaxed md:text-5xl">
                     Why stay hungry when you can order form Bella Onojie
                  </h1>
                  <p className="text-xl mb-5 font-light">
                     Download the bella onoje’s food app now on{" "}
                  </p>
                  <div className="flex justify-center z-5">
                     <button className="mx-2 md:mx-6 md:px-10 border border-transparent bg-red-500 px-8 py-3 rounded-full hover:bg-transparent hover:border-white transition-all">
                        Playstore
                     </button>
                     <button className="mx-2 md:mx-6 md:px-10 border border-transparent bg-red-500 px-8 py-3 rounded-full hover:bg-transparent hover:border-white transition-all">
                        Appstore
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
