import React from "react";

function PlayButton(props) {
  return (
    <button
      className={"play-button " + (props.isPlaying ? "play-button__pause" : "play-button__play")}
      onClick={props.handleClick}
    ></button>
  );
}

export default PlayButton;
