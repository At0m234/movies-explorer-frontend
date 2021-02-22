import React from 'react';
import './Movies.css';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

// компонент страницы с поиском по фильмам
function Movies () {
  return (
    <section className='movies'>
      <SearchForm/>
      <MoviesCardList/>
    </section>
  )
}

export default Movies;