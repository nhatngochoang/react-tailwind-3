import { useState } from "react";
import { BsSunFill } from "react-icons/bs"
import { HiOutlineMenu } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md"
const NavBar = () => {
   const [openMenu, setOpenMenu] = useState(false)

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
            {openMenu ?
               <MdOutlineClose className="cursor-pointer"
                  size={"24px"}
                  onClick={() => setOpenMenu(!openMenu)} />
               :
               <HiOutlineMenu className="cursor-pointer"
                  size={"24px"}
                  onClick={() => setOpenMenu(!openMenu)}
               />

            }
            {openMenu &&
               <div className="absolute right-[8%] bg-white p-8 text-center text-black text-13">
                  <li className="cursor-pointer">Features</li>
                  <li className="cursor-pointer">Menu</li>
                  <li className="cursor-pointer">Our Story</li>
                  <li className="cursor-pointer">Contact</li>
               </div>
            }
         </ul>
      </nav>
   );
}

export default NavBar;