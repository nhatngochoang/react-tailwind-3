import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Lab() {
   const variants = {
      base: 'border-2 border-dashed border-gray-300',
      active: 'border-blue-500',
      error: 'border-red-500',
   }

   const [isActive, setIsActive] = React.useState(false)
   const [error, setError] = React.useState(false)

   return (
      <div>
         <button onClick={() => setIsActive(!isActive)}>Toggle Active</button>
         <button onClick={() => setError(!error)}>Toggle Error</button>
         <DropZone className={twMerge(
            variants.base,
            isActive && variants.active,
            error && variants.error,
         )}
         />
      </div>
   )
}


const DropZone = ({
   className,
   ...props
}) => {
   return (
      <div className={className} {...props}></div>
   )
}