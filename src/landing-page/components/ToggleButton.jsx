import { useEffect } from "react";

const ToggleButton = ({ isDarkMode, toggleDarkMode }) => {

   useEffect(() => {
      if (isDarkMode) {
         document.body.classList.add("darkmode")
      } else {
         document.body.classList.remove("darkmode")
      }
   }, [isDarkMode])

   return (
      <div className="toggle__wrapper" >
         <input type="checkbox" className={`toggle__wrapper-btn`} id="switch-input" onChange={() => toggleDarkMode(!isDarkMode)} />
         <label className="switch-label" htmlFor="switch-input"></label>
      </div>
   );
}

export default ToggleButton;