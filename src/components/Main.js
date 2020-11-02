import React from 'react';
import '../blocks/main/main.css';
import '../blocks/streamings/streamings.css';
import Streamings from './Streamings';
import Content from './Content.js';

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
      <Content />
    </div>
  );
}

export default Main;
