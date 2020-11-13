import React from "react";
import useAudioPlayer from "./useAudioPlayer"
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

function Song({songTitle, songTime, onClick}) {
  const { curTime, setCurTime, duration} = useAudioPlayer();

  const curPercentage = (curTime - duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }
  
const clickHandler = (e) => {
const rect = e.target.getBoundingClientRect();
const x = e.clientX - rect.left
const timeToGo  = x / rect.width * 100;
onClick(timeToGo)
  }
  // }
  return (
    <div className="song">
      <div className="song__container" >
        <span className="song__title">{songTitle}</span>
        <span className="song__timer" curTime={curTime} duration={duration}>{formatDuration(duration - curTime)}</span>
      </div>
      <div className="song__progress-bar" onClick={clickHandler}>
        <div className="song__progress-knob"
        style={{width: `${curTime / duration * 100}%`}}/>
      </div>
    </div>
  );
}

export default Song;
