import React, { useState } from "react";
import Song from "./Song";
import PlayButton from "./PlayButton";
import Playlist from "./Playlist";
import SwitchButton from "./SwitchButton";
import ExpanderButton from "./ExpanderButton";
import { songs } from "../../utils/songs.js";
import useAudioPlayer from "./useAudioPlayer"
import song from "./1.mp3"
// import useAudioPlayer from './useAudioPlayer';

function AudioPlayer() {

  const [expandedBox, setExpandedBox] = useState(false);
  const [lyricsShown, setLyricsShown] = useState(songs.length < 2);
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  function toggleExpandedBox() {
    setExpandedBox(!expandedBox);
  }
  function toggleLyricsShown() {
    setLyricsShown(!lyricsShown);
  }

  return (
    <div className={"audioplayer " + (expandedBox ? "audioplayer_expanded" : "audioplayer_collapsed")}>
      <audio id="audio">
        <source src={song}  type="audio/mp3"/>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <PlayButton handleClick={() => setPlaying(!playing)} isPlaying={playing} />

      <Song songTitle={songs[0].title} songTime="2:24" />

      {expandedBox && (
        <SwitchButton lyricsShown={lyricsShown} onClick={toggleLyricsShown} />
      )}

      <ExpanderButton  onClick={toggleExpandedBox} isExpanded={expandedBox} />

      {expandedBox && (

        <div className="expanded-box">

          <h3 className="expanded-box__heading">
            {lyricsShown ? "Текст песни:" : "Релизы:"}
          </h3>
          {lyricsShown && (
            <p className="expanded-box__text">{songs[0].lyrics}</p>
          )}
          {!lyricsShown && <Playlist />}

        </div>

      )}
    </div>
  );
}

export default AudioPlayer;
