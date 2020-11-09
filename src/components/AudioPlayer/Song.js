import React from "react";

function Song({songTitle, songTime}) {
  return (
    <div className="song">
      <div className="song__container">
        <span className="song__title">{songTitle}</span>
        <span className="song__timer">{songTime}</span>
      </div>
      <div className="song__progress-bar">
        <div className="song__progress-knob" />
      </div>
    </div>
  );
}

export default Song;
