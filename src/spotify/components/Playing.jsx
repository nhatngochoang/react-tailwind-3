import React, { useContext } from 'react'
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from 'react-h5-audio-player'
import { Songs } from '../Context.js';

export default function Playing() {
   const { Data: SongList, playingSong, setPlayingSong, handlePlaySong } = useContext(Songs)
   const handleClickNext = () => {
      const nextSongId = playingSong.id + 1
      const nextSong = SongList.find(song => song.id === nextSongId)
      handlePlaySong(nextSong)
      setPlayingSong(nextSong)
   }
   const handleClickPrev = () => {
      if (playingSong.id !== 0) {
         const prevSongId = playingSong.id - 1
         const prevSong = SongList.find(song => song.id === prevSongId)
         handlePlaySong(prevSong)
         setPlayingSong(prevSong)
      }
   }

   return (
      <>
         <AudioPlayer src={playingSong.url} className="playing" layout='stacked-reverse'
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            onEnded={handleClickNext}
            autoPlay={true} // if browser doesn't block
         />
      </>
   )
}
