import React from 'react';
import './Footer.css'

// презентационный компонент, который отрисовывает подвал
function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
        <h3 className='footer__author'>Ильин Владимир Олегович &copy;2021</h3>
          <nav className='footer__links'>
            <a className='footer__link' href='https://praktikum.yandex.ru/' target='/black'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/At0m234' target='/black'>Github</a>
            <a className='footer__link' href='https://www.instagram.com/vladimir.olegovich90/' target='/black'>Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;