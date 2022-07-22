import { useInView } from 'react-intersection-observer'
const work = require("../assets/img/work-dec.png");
const work1 = require("../assets/img/work-1.png");
const work2 = require("../assets/img/work-2.png");
const work3 = require("../assets/img/work-3.png");
const work4 = require("../assets/img/work-4.png");

const Work = () => {
   const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
   });
   console.log(inView);
   return (
      <>
         {/* works  */}
         <section id="works" className={`${inView ? "slider slider--zoom" : "slider"}`} ref={ref}>
            <div className="container">
               {/* dec  */}
               <div className="works__dec">
                  <img src={work} alt="illustration of leaf" />
               </div>
               <div className="works__dec">
                  <img src={work} alt="illustration of leaf" />
               </div>
               {/* heading  */}
               <h2 className="text-center md:text-[40px] md:mt-16">Recent Projects</h2>
               {/* img  */}
               <div className="works__img">
                  <div className="works__img--single">
                     <img src={work1} alt="bag" />
                     <div className="photo__overlay">
                        <h3 className="photo__title">
                           Redux Photo App
                        </h3>
                        <div className="photo__actions">
                           <div>
                              <button type="button" className="btn btn-outline-light btn-sm">
                                 <a href="http://redux-photo-app-tahn-0102r.surge.sh/photos">Take a View</a>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="works__img--single">
                     <img src={work2} alt="plate" />
                     <div className="photo__overlay">
                        <h3 className="photo__title">
                           Lading Page
                        </h3>
                        <div className="photo__actions">
                           <div>
                              <button type="button" className="btn btn-outline-light btn-sm">
                                 <a href="https://react-tailwind-3-4az8ee0q9-tahn-0102.vercel.app/landingPage">Take a View</a>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="works__img--single">
                     <img src={work3} alt="women" />
                     <div className="photo__overlay">
                        <h3 className="photo__title">
                           MERN App
                        </h3>
                        <div className="photo__actions">
                           <div>
                              <button type="button" className="btn btn-outline-light btn-sm">
                                 <a href="https://m2-ecommerce-shop-dvw2xg7tb-tahn-0102.vercel.app/">Take a View</a>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="works__img--single">
                     <img src={work4} alt="piggy bank" />
                     <div className="photo__overlay">
                        <h3 className="photo__title">
                           Spotify
                        </h3>
                        <div className="photo__actions">
                           <div>
                              <button type="button" className="btn btn-outline-light btn-sm">
                                 <a href="https://react-tailwind-3-4az8ee0q9-tahn-0102.vercel.app/spotify">Take a View</a>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* btn  */}
               <div className="works__btn">
                  <a href="https://github.com/tahn-0102">
                     <button>View Works</button>
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default Work;
