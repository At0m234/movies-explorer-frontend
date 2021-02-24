import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList () {
  return (
    <div className='movies-card-list'>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </div>
  )
}

export default MoviesCardList;
