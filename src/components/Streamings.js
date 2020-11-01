import React from 'react';

function Streamings() {
  return (
    <div className="streamings">
      <ul className="streamings__list">

        <li className="streamings__list-item">
        <a className="streamings__link" rel="noreferrer" href="https://music.yandex.ru/" target="_blank">
          Яндекс.Музыка ↗</a></li>

        <li className="streamings__list-item">
        <a className="streamings__link" rel="noreferrer" href="https://www.spotify.com/ru-ru/" target="_blank">
          Spotify ↗</a></li>

        <li className="streamings__list-item">
        <a className="streamings__link" rel="noreferrer" href="https://www.apple.com/ru/apple-music/" target="_blank">
          Apple Music ↗</a></li>
        <li className="streamings__list-item">
        <a className="streamings__link" rel="noreferrer" href="https://vk.com/vkmusic" target="_blank">
          VK Music ↗</a></li>
      </ul>
    </div>
  )
}

export default Streamings;
