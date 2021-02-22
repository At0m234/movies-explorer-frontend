import React from 'react';
import './MoviesCard.css';

import poster from '../../../images/Gladiator.jpg'

// компонент одной карточки фильма
function MoviesCard () {
  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={poster} alt='Постер фильма'></img>
      <div className='movies-card__container'>
        <h2 className='movies-card__container_title'>Гладиатор</h2>
        <button className='movies-card__container_remove'></button>
      </div>
      <p className='movies-card__duration'>1ч 42м</p>
    </div>
  )
}

export default MoviesCard;
