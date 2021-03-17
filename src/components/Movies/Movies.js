import React, {useEffect} from 'react';
import './Movies.css';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

// компонент страницы с поиском по фильмам
function Movies (props) {

  useEffect(()=>{
    props.setIsOnSaved(false);
  })

  return (
    <section className='movies'>
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
        <MoviesCardList
          cards={props.cards}
          allMovies={props.allMovies}
          setAllMovies={props.setAllMovies}
          errorFound={props.errorFound}
          cardsVisible={props.cardsVisible}
          savedMovies={props.savedMovies}
          setSavedMovies={props.setSavedMovies}
          liked={props.liked}
          setLiked={props.setLiked}
          likeMovie={props.likeMovie}
          dislikeMovie={props.dislikeMovie}
          isLoading={props.isLoading}
          firstSearch={props.firstSearch}
        />
        {
          ((props.isLoading === false) && (props.cardsVisible < props.cards.length))
            ? <div className='movies__container'>
                <button className='movies__add-mov-btn'onClick={()=>{
                  props.setCardsVisible (
                    props.windowWidth > 1281
                    ? props.cardsVisible + 4
                    :  props.windowWidth > 1024 && props.windowWidth < 1280
                      ? props.cardsVisible + 3
                      : props.windowWidth > 481 && props.windowWidth < 1024
                      ? props.cardsVisible + 2
                      : props.windowWidth > 50 && props.windowWidth < 480
                      ? props.cardsVisible + 2
                      : props.card
                  )
                }}
                >Ещё</button>
              </div>
            : ""
        }
    </section>

  )
}

export default Movies;