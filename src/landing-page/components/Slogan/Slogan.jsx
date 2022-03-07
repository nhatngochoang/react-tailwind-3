import Card from '../../assets/landing-page/desktop/isocard.svg'
const Slogan = () => {
   return (
      <section className="text-36 my-14 font-extrabold md:my-28 md:grid-cols-3 md-items-center md:text-48 md:relative md:my-[12rem]">
         <div className="text-center md:col-start-2 md:col-span-1">
            <p>
               Earn <span className="text-purple-300"> More</span>
            </p>
            <p>Pay Less</p>
            <button
               className="text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-25 md:px-8 md:py-[8px]">
               Start
            </button>
         </div>
         <div className="mt-[69px] md:absolute md:right-[5%] md:top-0 md:mt-[-60px]">
            <img src={Card} alt="credit card" />
         </div>
      </section>
   );
}

export default Slogan;