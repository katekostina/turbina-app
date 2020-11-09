import React, { useState } from 'react';
import { streamingsList } from '../utils/streamingsLinkList'

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
        {streamingsList.map((link) => {
          return (
            <li className="streamings__list-item" key={link.id}>
            <a className="streamings__link" rel="noreferrer" href={link.link} target="_blank">
              {link.name} &#8599;</a>
          </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Streamings;
