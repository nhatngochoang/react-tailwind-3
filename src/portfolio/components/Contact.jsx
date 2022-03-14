import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./Social.jsx";

const thing_l = require('../assets/img/things-dec-l.png')
const footer = require('../assets/img/footer-img.png')

const Contact = ({ isMobile }) => {
   return (
      <>
         <div className="container">
            {/* dec  */}
            <div className="footer__dec">
               <img src={thing_l} alt="illustration of leaf" />
            </div>
            {/* img  */}
            <div className="footer__img">
               <img src={footer} alt="illustration of women" />
            </div>
            {/* heading  */}
            <div className="footer__heading">
               <h1 >Contact with me!</h1>
               {/* contact  */}
               <div className="footer__contact">
                  <a href="tel:0349888102">
                     <FontAwesomeIcon icon={faPhone} />
                     <p>(+84)349-888-102</p>
                  </a>
                  <a href="mailto:ongthosongtu@gmail.com">
                     <FontAwesomeIcon icon={faEnvelope} />
                     <p>ongthosongtu@gmail.com</p>
                  </a>
               </div>
               {!isMobile && <div className="md:translate-x-[41%]">
                  <Social />
               </div>}
            </div>
         </div></>
   );
}

export default Contact;