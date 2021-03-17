import React from 'react';
import './Techs.css';

// компонент с использованными технологиями
function Techs () {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='techs__container'>
        <div className='techs__skill'>HTML</div>
        <div className='techs__skill'>CSS</div>
        <div className='techs__skill'>JS</div>
        <div className='techs__skill'>React</div>
        <div className='techs__skill'>Git</div>
        <div className='techs__skill'>Express.js</div>
        <div className='techs__skill'>mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;