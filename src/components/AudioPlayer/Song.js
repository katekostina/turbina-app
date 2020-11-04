import React from 'react';
import '../../blocks/song/song.css'
import {songs} from '../../utils/songs.js'
// Не сделал поднятие названия и имени исполнителя из файла. 
function Song(props) {
  const { songName, songArtist } = props;

  return (
    <div className="song">
      <h1 className="song__title">{songName}</h1>
      <h2 className="song__artist">{songArtist}</h2>
    </div>
  )
}

export default Song;