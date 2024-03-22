import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Songs } from '../Context.js'

export default function SongList() {
   const { Data: SongList, handlePlaySong, id } = useContext(Songs)

   return (
      <div className="col-span-2 overflow-y-scroll">
         <table className="table-auto w-full">
            <thead className="text-white">
               <tr className="h-14">
                  <th className="w-[10%]">#</th>
                  <th className="text-left">Title</th>
                  <th className="w-[15%]">Author</th>
                  <th className="w-[10%] text-center">
                     <FontAwesomeIcon icon={faDownload} style={{ color: 'white' }} />
                  </th>
               </tr>
            </thead>
            <tbody className="bg-[#1E293B] text-16">
               {SongList.map((song, songidx) => {
                  return (
                     <tr key={song.id} className={`h-12 text-[#A3A3A3] hover:bg-[#475569] ${id === song.id ? 'bg-[#475569] text-[#5EEAD4]' : ''}`}
                        onClick={() => handlePlaySong(song)}>
                        <td className="text-center">{songidx + 1}</td>
                        <td className="">{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center">
                           <a href={song.url}>
                              <FontAwesomeIcon icon={faDownload} style={{ color: '#A3A3A3' }} />
                           </a>
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </div>
   )
}
