import { BsSunFill } from "react-icons/bs"
import { HiOutlineMenu } from "react-icons/hi"
const NavBar = () => {
   return (
      <nav className="flex items-center">
         <div className="flex items-center">
            <div className="text-20 font-bold mr-2">NerdCard</div>
            <BsSunFill className="cursor-pointer"
               size={"24px"}
               color={"#e9c46a"}
            />
         </div>
         <ul className="ml-auto text-16 font-semibold">
            <HiOutlineMenu className="cursor-pointer"
               size={"24px"}
            />
         </ul>
      </nav>
   );
}

export default NavBar;