import React from "react";

function SwitchButton(props) {
  return (
    <button className="switch-button" onClick={props.onClick}>
      {props.lyricsShown ? "Релизы" : "Текст песни"}
    </button>
  );
}

export default SwitchButton;
