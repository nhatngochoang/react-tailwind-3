import React from 'react'
import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import useDarkMode from '../../hooks/useDarkMode.js';

export default function SideBar() {
   const [isDarkMode, toggleDarkMode] = useDarkMode()
   console.log('%c isDarkMode: ', 'color:red', isDarkMode)
   return (
      <>
         <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg dark:bg-secondary'>
            <SideBarIcon icon={<FaFire size='28' />} />
            <SideBarIcon icon={<BsPlus size='32' />} />
            <SideBarIcon icon={<BsFillLightningFill size='20' />} />
            <SideBarIcon icon={<FaPoo size='20' />} />
         </div>
         <button onClick={toggleDarkMode}>Dark Mode</button>
      </>

   )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => {
   return (
      <div className='sidebar-icon group'>
         {icon}
         <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
      </div>
   )
}