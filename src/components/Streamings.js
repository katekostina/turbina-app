import React, { useState } from 'react';
import { streamingsList } from '../utils/linksList';
import StreamingsOpenedBtn from './svg/StreamingsOpenedBtn';

function Streamings() {
  const classNames = require('classnames');

  const [streamingsIsOpen, setStreamingsIsOpen] = useState(true);
  const [streamingsBtnIsClicked, setStreamingsBtnIsClicked] = useState(false);

  const handleBtnClick = () => {
    setStreamingsIsOpen(!streamingsIsOpen);
    setStreamingsBtnIsClicked(!streamingsBtnIsClicked);
  };

  return (
    <div className="streamings">

      <button className={classNames('streamings__open-btn', {
        'streamings__open-btn_is-clicked': streamingsBtnIsClicked,
      })}
              onClick={handleBtnClick}>
        {streamingsBtnIsClicked ? <StreamingsOpenedBtn /> : 'Стриминги'}
      </button>

      <ul className={classNames('streamings__list', {
        'streamings__list_type_mobile': !streamingsIsOpen,
      })}>

        {streamingsList.map(({id, link, name}) => {
          return (
            <li className="streamings__list-item" key={id}>
            <a className="streamings__link" rel="noreferrer" href={link} target="_blank">
              {name} &#8599;</a>
          </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Streamings;
