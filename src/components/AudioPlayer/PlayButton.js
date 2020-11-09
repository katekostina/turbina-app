import React from "react";

function PlayButton({isPlaying, handleClick}) {
  return (
    <button
      className={"play-button " + (isPlaying ? "play-button__pause" : "play-button__play")}
      onClick={handleClick}
    ></button>
  );
}

export default PlayButton;
