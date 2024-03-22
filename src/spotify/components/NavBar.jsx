import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
   return (
      <div className="h-24 bg-slate-900 text-white text-center leading-[6rem] text-[35px]">
         <FontAwesomeIcon icon={faSpotify} style={{ color: 'white' }} className="mr-5" />
         Spotify
      </div>
   )
}
