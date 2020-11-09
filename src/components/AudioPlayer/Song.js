import React from "react";
import useAudioPlayer from "./useAudioPlayer"
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

function Song({songTitle, songTime}) {
  const { curTime, duration} = useAudioPlayer();

  const curPercentage = (curTime - duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }
  //   function calcClickedTime(e) {
  //   const clickPositionInPage = e.pageX;
  //   const bar = document.querySelector(".bar__progress");
  //   const barStart = bar.getBoundingClientRect().left + window.scrollX;
  //   const barWidth = bar.offsetWidth;
  //   const clickPositionInBar = clickPositionInPage - barStart;
  //   const timePerPixel = duration / barWidth;
  //   return timePerPixel * clickPositionInBar;
  // }
  return (
    <div className="song">
      <div className="song__container">
        <span className="song__title">{songTitle}</span>
        <span className="song__timer" curTime={curTime} duration={duration}>{formatDuration(duration - curTime)}</span>
      </div>
      <div className="song__progress-bar">
        <div className="song__progress-knob" />
      </div>
    </div>
  );
}

export default Song;
