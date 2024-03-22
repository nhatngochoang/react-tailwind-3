import { useEffect, useState } from "react";

const useDarkMode = () => {
   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === 'dark')
   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode)
   }

   useEffect(() => {
      const html = window.document.documentElement
      const prevClass = isDarkMode ? 'light' : 'dark'
      html.classList.remove(prevClass)
      const newClass = isDarkMode ? 'dark' : 'light'
      html.classList.add(newClass)
      localStorage.setItem('theme', newClass)
   }, [isDarkMode])

   return [isDarkMode, toggleDarkMode]
}

export default useDarkMode;