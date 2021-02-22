import React from 'react';
import './Portfolio.css'
import arrowImg from '../../../images/arrow.svg'

// компонент со ссылками на другие проекты
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links'>
        <a href='https://github.com/At0m234/movies-explorer-frontend' className='portfolio__link' target='/blank'>Статичный сайт<img src={arrowImg} alt='Стрелка'></img></a>
        <a href='https://github.com/At0m234/movies-explorer-frontend' className='portfolio__link' target='/blank'>Адаптивный сайт<img src={arrowImg} alt='Стрелка'></img></a>
        <a href='https://github.com/At0m234/movies-explorer-frontend' className='portfolio__link' target='/blank'>Одностраничное приложение<img src={arrowImg} alt='Стрелка'></img></a>
      </div>
    </section>
  )
}

export default Portfolio;