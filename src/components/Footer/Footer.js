import './Footer.css';
import React from 'react';

function Footer() {
    return (
    <footer className="footer">
        <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__links-wrapper">
            <p className="footer__paragraph footer__paragraph_light">© 2020</p>
            <ul className="footer__links">
                <li className="footer__link-wrapper"><a href="https://praktikum.yandex.ru/web/" rel="noreferrer" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
                <li className="footer__link-wrapper"><a href="https://github.com/DeFida" rel="noreferrer" target="_blank" className="footer__link">Github</a></li>
                <li className="footer__link-wrapper"><a href="https://www.facebook.com/profile.php?id=100021879007320" rel="noreferrer" target="_blank" className="footer__link">Facebook</a></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;
