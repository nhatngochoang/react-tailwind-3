import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Playing from "./components/Playing.jsx";
import SongDetail from "./components/SongDetail.jsx";
import SongList from "./components/SongList.jsx";
import { Songs } from "./Context.js";
import Data from './data/songs2.json'
import './Spotify.css';

const Spotify = () => {
   const [playingSong, setPlayingSong] = useState(Data[0])

   const [id, setID] = useState(playingSong.id)
   const handlePlaySong = (song) => {
      setID(song.id)
      setPlayingSong(song)
   }

   return (
      <Songs.Provider value={{ Data, playingSong, setPlayingSong, handlePlaySong, id }}>
         <NavBar />
         <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
            <SongDetail />
            <SongList />
         </div>
         <Playing />
      </Songs.Provider>
   );
}

export default Spotify;