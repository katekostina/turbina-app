import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyrights">&#169; Маршак, 2020.</p>
      <p className="footer__made-by">Сделано студентами&nbsp;
        <a className="footer__link"
           href="https://praktikum.yandex.ru/"
           rel="noreferrer" target="_blank">Яндекс.Практикум</a></p>
    </footer>
  )
}

export default Footer;
