import { FaUser } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIcon from '../../assets/mobile/checkpoint.svg'

const Content = () => {
   const spring = useSpring({ customer: 12345, from: { customer: 0 } })
   return (
      <section className="ml-[70px] mr-[54px] text-bold">
         <div className="section-content">
            <FaUser size="44px" />
            <div className="section-content-wrapper">
               <p className="text-26">12345</p>
               <p className="section-content__text">Customers</p>
            </div>
         </div>
         <div className="section-content mt-[20px]">
            <BsFillCreditCardFill size="44px" />
            <div className="section-content-wrapper">
               <p className="text-26">
                  <animated.div>
                     {spring.customer.to(val => Math.floor(val))}
                  </animated.div>
               </p>
               <p className="section-content__text">Cards Issued</p>
            </div>
         </div>
         <div className="text-13 flex flex-col w-[100%] mt-[40px] font-semibold">
            <div className="check-content">
               <img src={checkIcon} alt="" />
               <p>Card reports sent to your phone every weeks</p>
            </div>
            <div className="check-content">
               <img src={checkIcon} alt="" />
               <p>No external fee</p>
            </div>
            <div className="check-content">
               <img src={checkIcon} alt="" />
               <p>Set spending limits and restrictions</p>
            </div>
         </div>
      </section>
   );
}

export default Content;