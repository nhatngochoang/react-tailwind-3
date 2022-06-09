import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
   return (<>
      <div className="mt-2 pt-10 flex justify-evenly md:justify-start">
         <a className="text-gray-var hover:text-green-l-var smooth md:mr-[45px]" href="https://github.com/nhatngochoang"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
         <a className="text-gray-var hover:text-green-l-var smooth md:mr-[45px]" href="https://www.linkedin.com/in/nhat-hoang-4704a1230/"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
         <a className="text-gray-var hover:text-green-l-var smooth md:mr-[45px]" href="https://www.facebook.com/profile.php?id=100008695002406"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
      </div>
   </>);
}

export default Social;