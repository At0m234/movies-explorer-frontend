import React from 'react';
import './Promo.css';

import landingLogo from '../../../images/landing-logo.svg';

// компонент с вёрсткой баннера страницы «О проекте».
function Promo () {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__container_title'>Учебный проект студента факультета Веб-разработки</h1>
        <p className='promo__container_text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
        <button className='promo__container_button'>Узнать больше</button>
      </div>
      <img className='promo__image' src={landingLogo} alt='Лого'></img>
    </section>
  );
}

export default Promo;
