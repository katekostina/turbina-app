import React, { useState } from 'react';

function Streamings() {

  const [streamingsIsOpen, setStreamingsIsOpen] = useState(true);
  const [streamingsBtnIsClicked, setStreamingsBtnIsClicked] = useState(false);

  const handleBtnClick = () => {
    setStreamingsIsOpen(!streamingsIsOpen);
    setStreamingsBtnIsClicked(!streamingsBtnIsClicked);
  };

  return (
    <div className="streamings">
      <button className={`streamings__open-btn ${streamingsBtnIsClicked 
        ? 'streamings__open-btn_isClicked' : ''}`}
              onClick={handleBtnClick}>{streamingsBtnIsClicked ? '' : 'Стриминги'}</button>

      <ul className={`streamings__list ${streamingsIsOpen ? '' : 'streamings__list_type_mobile'}`}>
        <li className="streamings__list-item">
          <a className="streamings__link" rel="noreferrer" href="https://music.yandex.ru/" target="_blank">
          Яндекс.Музыка &#8599;</a>
        </li>
        <li className="streamings__list-item">
          <a className="streamings__link" rel="noreferrer" href="https://www.spotify.com/ru-ru/" target="_blank">
          Spotify &#8599;</a>
        </li>
        <li className="streamings__list-item">
          <a className="streamings__link" rel="noreferrer" href="https://www.apple.com/ru/apple-music/" target="_blank">
          Apple Music &#8599;</a>
        </li>
        <li className="streamings__list-item">
          <a className="streamings__link" rel="noreferrer" href="https://vk.com/vkmusic" target="_blank">
          VK Music &#8599;</a>
        </li>
      </ul>
    </div>
  );
}

export default Streamings;
