import React, { useState, useEffect, useRef } from "react";
import Song from "./Song";
import PlayButton from "./PlayButton";
import Playlist from "./Playlist";
import SwitchButton from "./SwitchButton";
import ExpanderButton from "./ExpanderButton";
import { songs } from "../../utils/songs.js";
import throttling from "../../utils/throttling.js";

function AudioPlayer() {
  const classNames = require("classnames");
  const myPlayer = useRef(null);
  const [expandedBox, setExpandedBox] = useState(false);
  const [lyricsShown, setLyricsShown] = useState(songs.length < 2);
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  useEffect(() => {
    const audio = document.getElementById("audio");
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };
    const setAudioTime = () => setCurTime(audio.currentTime);
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  useEffect(() => {
    const audio = document.getElementById("audio");
    playing ? audio.play() : audio.pause();
  });

  function toggleExpandedBox() {
    setExpandedBox(!expandedBox);
  }
  function toggleLyricsShown() {
    setLyricsShown(!lyricsShown);
  }

  function changeCurrentSong(song) {
    setCurrentSong(song);
  }

  return (
    <div
      className={classNames("audioplayer", {
        audioplayer_expanded: expandedBox,
        audioplayer_collapsed: !expandedBox,
      })}
    >
      <audio id="audio" ref={myPlayer} src={currentSong.audio}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <PlayButton
        handleClick={() => setPlaying(!playing)}
        isPlaying={playing}
      />

      <Song
        title={currentSong.title}
        musician={currentSong.musician}
        poet={currentSong.poet}
        duration={duration}
        curTime={curTime}
        onClick={(curTime) => {
          myPlayer.current.currentTime = curTime;
        }}
      />

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
            <p className="expanded-box__text">{currentSong.lyrics}</p>
          )}
          {!lyricsShown && (
            <Playlist songs={songs} changeCurSong={changeCurrentSong} />
          )}
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
