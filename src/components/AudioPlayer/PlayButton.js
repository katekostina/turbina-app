import React from "react";
import PauseBtn from '../svg/PauseBtn';
import PlayBtn from '../svg/PlayBtn';

const classNames = require('classnames');
function PlayButton({ isPlaying, handleClick } )  {


  return(
  <button
  className={classNames("play-button", {
    "play-button__pause": isPlaying,
    "play-button__play": !isPlaying,
  })}
  onClick={handleClick}
  > {isPlaying ? <PauseBtn /> : <PlayBtn />}
  </button>
)
}
export default PlayButton;
