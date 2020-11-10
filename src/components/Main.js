import React from 'react';
import Streamings from './Streamings';
import AudioPlayer from './AudioPlayer/AudioPlayer'
import MainLogo from './svg/MainLogo'
function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <a className="main__logo-link" rel="noreferrer" href="https://marshakbooks.ru/" target="_blank">
          <div className="main__logo">
            <MainLogo />
          </div>
        </a>
        <Streamings />
      </div>

      <div className="main__name" />
      <AudioPlayer/>
    </div>
  );
}

export default Main;
