import { FaUser } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIcon from '../../assets/landing-page/mobile/checkpoint.svg'

const Content = () => {
   const customerSpring = useSpring({ customers: 12345, from: { customers: 0 } })
   const cardSpring = useSpring({ cards: 12345, from: { cards: 0 } })

   return (
      <section className="ml-[70px] mr-[54px] text-bold md:flex md:justify-around md:ml-[11%]">
         <div className="section-content md:w-[15%] md:mx-[40px]">
            <FaUser size="44px" />
            <div className="section-content-wrapper">
               <div className="text-26 md:text-32">
                  <animated.div>
                     {customerSpring.customers.to(val => Math.floor(val))}
                  </animated.div>
               </div>
               <p className="section-content__text">Customers</p>
            </div>
         </div>
         <div className="section-content mt-[20px] md:w-[15%] md:mx-[40px]">
            <BsFillCreditCardFill size="44px" />
            <div className="section-content-wrapper">
               <div className="text-26 md:text-32">
                  <animated.div>
                     {cardSpring.cards.to(val => Math.floor(val))}
                  </animated.div>
               </div>
               <p className="section-content__text">Cards Issued</p>
            </div>
         </div>
         <div className="text-13 flex flex-col w-[100%] mt-[40px] font-semibold md:w-[30%] md:text-16">
            <div className="check-content md:my-6">
               <img src={checkIcon} alt="" />
               <p>Card reports sent to your phone every weeks</p>
            </div>
            <div className="check-content md:my-6">
               <img src={checkIcon} alt="" />
               <p>No external fee</p>
            </div>
            <div className="check-content md:my-6">
               <img src={checkIcon} alt="" />
               <p>Set spending limits and restrictions</p>
            </div>
         </div>
      </section>
   );
}

export default Content;