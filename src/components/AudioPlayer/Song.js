import React from "react";

function Song(props) {
  return (
    <div className="song">
      <div className="song__container">
        <span className="song__title">{props.songTitle}</span>
        <span className="song__timer">{props.songTime}</span>
      </div>
      <div className="song__progress-bar">
        <div className="song__progress-knob" />
      </div>
    </div>
  );
}

export default Song;
