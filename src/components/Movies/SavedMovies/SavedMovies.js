import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// компонент страницы с сохранёнными карточками фильмов
function SavedMovies () {
  return (
    <section className='saved-movies'>
      <SearchForm/>
      <MoviesCardList/>
    </section>
  )
}

export default SavedMovies;