import React from "react";
import "../../blocks/audioplayer/__play/audioplayer__play.css";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="audioplayer__play" onClick={() => handleClick()}></button>
  );
}
