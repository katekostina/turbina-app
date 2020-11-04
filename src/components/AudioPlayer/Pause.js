import React from "react";
import "../../blocks/audioplayer/__stop/audioplayer__stop.css";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="audioplayer__stop" onClick={() => handleClick()}>

    </button>
  );
}