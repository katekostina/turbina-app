import React from 'react';
import  '../blocks/audioplayer/audioplayer.css';

function AudioPlayer() {
  return (

    <div className="audioplayer">
      <audio>
      <div className="audioplayer__container">
        <h2 className="audioPlayer__songName">Song BlahBlah</h2>
      </div>
      </audio>
      <div className="audioplayer__controls">
        <button className="audioplayer__play" data-icon="P" ></button>
        <button className="audioplayer__stop" data-icon="S" ></button>
        <div class="audioplayer__timer">
        <div></div>
      {/* Проблема с именованием классов. Этот спан отвечает именно за время */}
      </div>
      <span  aria-label="timer">00:00</span>
      <button className="audioplayer__menu"></button>
      </div>
    </div>
  );
}

export default AudioPlayer;
