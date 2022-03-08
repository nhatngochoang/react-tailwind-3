import React from 'react'
import Video from './components/Video.jsx'
import './TikTok.css'

export default function TikTok() {
   return (
      <div className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden">
         <Video />
         <Video />
         <Video />
         <Video />
      </div>
   )
}
