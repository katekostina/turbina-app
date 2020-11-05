import React from "react";
import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import useAudioPlayer from './useAudioPlayer';
import  '../../blocks/audioplayer/audioplayer.css';
import  '../../blocks/bar/bar.css';
import {songs} from '../../utils/songs.js'

function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className="audioplayer">
      <audio id="audio">
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="audioplayer__controls">
        {playing ?
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <div className="bar">
      <span className="bar__time"></span>
      <Song songName="Instant Crush —" songArtist="&nbsp; Daft Punk ft. Julian Casablancas12312321" />
      <div className="bar__progress">
        <span className="bar__progress_knob"/>
      </div>
    </div>
    <span className="bar__time">00:00</span>
      <button className="audioplayer__menu" onClick={console.log('hello')}></button>
      </div>
    </div>
  );
}

export default Audio;
