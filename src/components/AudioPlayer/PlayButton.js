import React from "react";

const classNames = require('classnames');

const PlayButton = ({ isPlaying, handleClick } )  =>
  <button
  className={classNames("play-button", {
    "play-button__pause": isPlaying,
    "play-button__play": !isPlaying,
  })}
  onClick={handleClick}
  />

export default PlayButton;
