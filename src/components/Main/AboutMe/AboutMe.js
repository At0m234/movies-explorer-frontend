import React from 'react';
import './AboutMe.css';
import MyPhoto from '../../../images/vladimir.olegovich.JPG'

// компонент с информацией о студенте
function AboutMe () {
  return (
    <section className='aboutMe'>
      <h2 className='aboutMe__title'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__info'>
          <h3 className='aboutMe__name'>Владимир</h3>
          <h4 className='aboutMe__profession'>Фронтенд-разработчик, 30 лет</h4>
          <p className='abourMe__text'>
            Я родился и живу в Москве. Женат.
            Закончил Геодезический факультет МИИГАиК по специальности: "Прикладная геодезия".
            Увлекаюсь спортом, шахматами, люблю прогулки на свежем воздухе, кино и компьютерные игры.
            С 2013 года работал по професии. Так же в 2016 году зарегистрировался как ИП и занимался бизнесом.
            В 2020 году начал обучение в Яндекс.Практикуме по специальности Веб-разработчик.
          </p>
          <div className='aboutMe__links'>
            <a className='aboutMe__link' href='https://github.com/At0m234' target='/blank'>Github</a>
            <a className='aboutMe__link' href='https://www.instagram.com/vladimir.olegovich90/' target='/blank'>Instagram</a>
          </div>
        </div>
        <img className='aboutMe__photo' src={MyPhoto} alt='Владимир'></img>
      </div>
    </section>
  );
}

export default AboutMe;