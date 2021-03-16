import React, {useEffect} from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList.js';

// компонент страницы с сохранёнными карточками фильмов
function SavedMovies (props) {
  useEffect(()=>{
    props.setIsOnSaved(true);
  })
  return (
    <section className='saved-movies'>
      <SearchForm
        hadnlefilmInputSearchChange={props.hadnlefilmInputSearchChange}
        onSearchMoviesFormSubmit={props.onSearchMoviesFormSubmit}
        filmInputSearchInvalid={props.filmInputSearchInvalid}
        setFilmInputSearchInvalid={props.setFilmInputSearchInvalid}
        filmInputSearchError={props.filmInputSearchError}
        setFilmInputSearchError={props.setFilmInputSearchError}
        filterCheckBoxOn={props.filterCheckBoxOn}
        setFilterCheckBoxOn={props.setFilterCheckBoxOn}
        blurHandler={props.blurHandler}
      />
      <SavedMoviesCardList
        cards={props.cards}
        savedMovies={props.savedMovies}
        setSavedMovies={props.setSavedMovies}
        cardsVisible={props.cardsVisible}
        setCardsVisible={props.setCardsVisible}
        allMovies={props.allMovies}
        setAllMovies={props.setAllMovies}

        liked={props.liked}
        setLiked={props.setLiked}
        likeMovie={props.likeMovie}
        dislikeMovie={props.dislikeMovie}
      />
    </section>
  )
}

export default SavedMovies;