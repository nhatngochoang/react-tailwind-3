import React, { useEffect, useRef, useState } from 'react'
import { FaMusic, FaHeart, FaComment, FaShare } from 'react-icons/fa'

const VideoInfo = () => {
   return (
      <div className="flex flex-row">
         <img src="https://cdn.devdojo.com/users/April2021/tnylea.jpg" className="w-[50px] h-[50px] rounded-full" alt="avt" />
         <div className="ml-3 min-w-[80%]">
            <div>
               <a href="#" className="text-xl font-bold hover:underline">account name</a>
               <a href="#" className="text-xl ml-2">username</a>
            </div>
            <div>title video</div>
            <div className="flex flex-row items-center">
               <FaMusic /><span className="ml-3">nhac nen</span>
            </div>
         </div>
         <div>
            <button className="p-1 px-3 border-2 border-red-400 text-red-400 rounded-md">Follow</button>
         </div>
      </div>
   )
}

const VideoContent = ({ videoRef, playing, setPlaying }) => {
   useEffect(() => {
      if (playing) {
         videoRef.current.play()
         setPlaying(true)
      } else {
         videoRef.current.pause()
         setPlaying(false)
      }
   }, [playing, videoRef, setPlaying])
   return (
      <div className="flex flex-row" >
         <video ref={videoRef} src="https://v16-webapp.tiktok.com/0812ea40a3cba5b2904136abe755afec/6228cc2f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/54eeb7c886124708b58f30f6746bde2d/?a=1988&br=1978&bt=989&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7Th9QlVDXq&l=202203090947430102452460690B23BAB8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=MzdreWY6ZmxwOzMzZjgzM0ApOTg6NzVlODs3NzVmMzo3aWdpXmJycjRnNWFgLS1kL2NzczE0MC8xYy1jMTBeY15fXjM6Yw%3D%3D&vl=&vr=" loop
            className="w-[80%] max-h-[600px] rounded-md mt-4"
         ></video>
         <div className="flex flex-col justify-end">
            <div className="w-[40xpx] h-[50px] rounded-full bg-[#F1F1F2] hover:bg-[#E7E7E9] transition ease-in-out flex items-center justify-center mb-2">
               <FaHeart color={'red'} />
            </div>
            <span className="text-xl mb-1">12345</span>
            <div className="w-[40xpx] h-[50px] rounded-full bg-[#F1F1F2] hover:bg-[#E7E7E9] transition ease-in-out flex items-center justify-center mb-2">
               <FaComment />
            </div>
            <span className="text-xl mb-1">12345</span>
            <div className="w-[40xpx] h-[50px] rounded-full bg-[#F1F1F2] hover:bg-[#E7E7E9] transition ease-in-out flex items-center justify-center mb-2">
               <FaShare />
            </div>
            <span className="text-xl mb-1">12345</span>
         </div>
      </div>
   )
}

export default function Video() {
   const videoRef = useRef(null)
   const divRef = useRef(null)
   const [playing, setPlaying] = useState(false)

   useEffect(() => {
      divRef.current.onmouseenter = () => setPlaying(true)
      divRef.current.onmouseleave = () => setPlaying(false)
   }, [])

   return (
      <div className="w-[100vw] px-[40%]" ref={divRef}
      // onMouseEnter={() => setPlaying(true)}
      // onMouseLeave={() => setPlaying(false)}
      >
         <div className="snap-start w-[570px] border-b-2 border-gray-200 py-10"
         >
            <VideoInfo />
            <VideoContent videoRef={videoRef} playing={playing} setPlaying={setPlaying} />
         </div>
      </div>
   )
}
