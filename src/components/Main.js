import React from 'react';
import  '../blocks/main/main.css';

function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <a rel="noreferrer" href="https://marshakbooks.ru/" target="_blank">
          <div className="main__logo" />
        </a>
        <ul className="main__linksList">
          <li className="main__link">Яндекс.Музыка</li>
          <li className="main__link">Spotify</li>
          <li className="main__link">Apple Music</li>
          <li className="main__link">VK Music</li>
        </ul>
      </div>
      <div className="main__name" />
    </div>
  );
}

export default Main;
