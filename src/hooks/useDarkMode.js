import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
   const [value, setValue] = useState(localStorage.getItem(key));

   const setLocalStorage = (value) => {
      localStorage.setItem(key, value);
      setValue(value);
   }

   return [value, setLocalStorage];
}

const useDarkMode = () => {
   const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-theme')

   const isEnabled = typeof isDarkMode === 'boolean' ? isDarkMode : false

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   }

   useEffect(() => {
      const className = 'dark'
      const bodyClass = window.document.body.classList

      isEnabled ? bodyClass.add(className) : bodyClass.remove(className)

   }, [isEnabled])

   return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;