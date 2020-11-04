import React from 'react';
import '../blocks/main/main.css';
import '../blocks/streamings/streamings.css';
import Streamings from './Streamings';
import ContentBox from './ContentBox.js';
import Audioplayer from './AudioPlayer/AudioPlayer'
function Main() {
  return (
    <div className="main">

      <div className="main__header">
        <a className="main__logo-link" rel="noreferrer" href="https://marshakbooks.ru/" target="_blank">
          <div className="main__logo" />
        </a>
          <Streamings />
      </div>

      <div className="main__name" />
      <ContentBox />
      <Audioplayer />
    </div>
  );
}

export default Main;