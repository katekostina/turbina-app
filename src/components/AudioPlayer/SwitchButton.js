import React from "react";

function SwitchButton({lyricsShown, onClick}) {
  return (
    <button className="switch-button" onClick={onClick}>
      {lyricsShown ? "Релизы" : "Текст песни"}
    </button>
  );
}

export default SwitchButton;
