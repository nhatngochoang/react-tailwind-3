import { Link } from "react-router-dom";
import SideBar from "../portfolio/components/SideBar.jsx";

const HomePage = () => {
   return (
      <>
         <div className="flex">
            <SideBar />
         </div>
         {/* <ul>
            <li>
               <Link to="/landingPage" >LandingPage</Link>
            </li>
            <li>
               <Link to="/landingPage2" >LandingPage2</Link>
            </li>
            <li>
               <Link to="/spotify" >spotify</Link>
            </li>
            <li>
               <Link to="/tiktok" >tiktok</Link>
            </li>
            <li>
               <Link to="/portfolio" >Portfolio</Link>
            </li>
         </ul> */}
      </>
   );
}

export default HomePage;