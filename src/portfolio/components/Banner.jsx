
import Social from "./Social.jsx";

const banner = require("../assets/img/banner-img.png")

const Banner = () => {

   return (<>
      <section className="relative h-screen flex items-center">
         <div className="container">
            {/* img */}
            <div className="absolute top-0 right-0 z-[-1]">
               <img src={banner} alt="illustration of women" />
            </div>
            {/* heading */}
            <div className="max-w-[300px] my-0 mx-auto text-center text-gray-var md:text-left md:m-0 md:p-0 md:max-w-[600px]">
               <h1 className="fs-[36px] pt-[60vh] mb-[28px] md:pt-0">Hello, I'm Nhat</h1>
               <p className="banner__heading__para">
                  As a web developer with a passion for JavaScript, React...Maybe Node in the future :))
               </p>
               <p className="banner__heading__para"> I've been constantly learning technical knowledge. I really love solving real world problems with JS and use different tools...  </p>
               <a href="#viewmore"><button className="banner__btn">View More</button></a>
               <Social />
            </div>
         </div>
      </section>
   </>);
}

export default Banner;