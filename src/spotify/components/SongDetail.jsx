import React, { useContext } from 'react'
import { Songs } from '../Context.js'

export default function SongDetail() {
   const { playingSong } = useContext(Songs)

   return (
      <div className="col-span-1 p-3">
         <h2 className="text-cyan-500 font-bold">Now Playing</h2>
         <h2 className="text-neutral-400 text-2xl animate-bounce">{playingSong.name}</h2>
         <div className="w-64 m-auto mt-10 text-center">
            <img className="w-full animate-pulse" src={playingSong.links.images[0].url} alt="song avatar" />
         </div>
         <div className="flex justify-evenly itesm-center mt-10">
            <img className="w-[70px] rounded-full animate-rotate relative left-[12%]" src={playingSong.links.images[1].url} alt="artist avatar" />
            <span className="text-xl text-white leading-[70px] mr-[12%]">{playingSong.author}</span>
         </div>
      </div>
   )
}
