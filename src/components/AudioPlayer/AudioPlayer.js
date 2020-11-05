import React, { useState } from "react";
import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Playlist from "./Playlist";
import SwitchButton from "./SwitchButton";
// import useAudioPlayer from './useAudioPlayer';
import { songs } from "../../utils/songs.js";
import ExpanderButton from "./ExpanderButton";

function AudioPlayer(props) {
  const [playing, setPlaying] = useState(false);
  const [expandedBox, setExpandedBox] = useState(false);
  const [lyricsShown, setLyricsShown] = useState(songs.length < 2);

  function toggleExpandedBox() {
    setExpandedBox(!expandedBox);
  }

  function toggleLyricsShown() {
    setLyricsShown(!lyricsShown);
  }

  return (
    <div className="audioplayer">
      <audio id="audio">
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="audioplayer__controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <div className="bar">
          <span className="bar__time"></span>
          <Song
            songName="Instant Crush —"
            songArtist="&nbsp; Daft Punk ft. Julian Casablancas"
          />
          <div className="bar__progress">
            <span className="bar__progress_knob" />
          </div>
        </div>
        <span className="bar__time">00:00</span>
        {expandedBox && (
          <SwitchButton lyricsShown={lyricsShown} onClick={toggleLyricsShown} />
        )}
        <ExpanderButton onClick={toggleExpandedBox} isExpanded={expandedBox} />
      </div>
      {expandedBox && (
        <div className="expanded-box">
          <h3 className="expanded-box__heading">{lyricsShown ? "Текст песни:" : "Релизы:"}</h3>
          {lyricsShown && (
            <p className="expanded-box__text">
              {songs[0].lyrics}
            </p>            
            )}
          {!lyricsShown && (<Playlist />)} 
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
