import React, { useState } from "react";
import Song from "./Song";
import PlayButton from "./PlayButton";
import Playlist from "./Playlist";
import SwitchButton from "./SwitchButton";
import ExpanderButton from "./ExpanderButton";

import { songs } from "../../utils/songs.js";

// import useAudioPlayer from './useAudioPlayer';

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
    <div className={"audioplayer " + (expandedBox ? "audioplayer_expanded" : "audioplayer_collapsed")}>
      <audio id="audio">
        <source src={songs[0].url} />
        Your browser does not support the <code>audio</code> element.
      </audio>

      <PlayButton handleClick={() => setPlaying(!playing)} isPlaying={playing} />

      <Song songTitle={songs[0].title} songTime="2:24" />

      {expandedBox && (
        <SwitchButton lyricsShown={lyricsShown} onClick={toggleLyricsShown} />
      )}

      <ExpanderButton onClick={toggleExpandedBox} isExpanded={expandedBox} />

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
