import React from 'react';
import { yandexPraktikumLink } from '../utils/linksList'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyrights">&#169; Маршак, 2020.</p>
      <p className="footer__made-by">Сделано студентами&nbsp;
        <a className="footer__link"
           href={yandexPraktikumLink.link}
           rel="noreferrer" target="_blank">{yandexPraktikumLink.title}</a></p>
    </footer>
  )
}

export default Footer;
