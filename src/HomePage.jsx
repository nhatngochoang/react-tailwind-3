import { Link } from "react-router-dom";

const HomePage = () => {
   return (
      <>
         HomePage
         <ul>
            <li>
               <Link to="/landingPage" >LandingPage</Link>
            </li>
            <li>
               <Link to="/spotify" >spotify</Link>
            </li>
         </ul>
      </>
   );
}

export default HomePage;