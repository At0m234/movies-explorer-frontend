import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList (props) {

  return (
    <div className='movies-card-list'>
      {
        (props.isLoading === true)
          ? <Preloader/>
          : (props.cards.length > 0)
            ? props.cards.map((card, index) => {
                if (index < props.cardsVisible)
                  return <MoviesCard
                    key={card.id}
                    card={card}
                    allMovies={props.allMovies}
                    setAllMovies={props.setAllMovies}
                    trailerLink={card.trailerLink}
                    src={card.image.url}
                    nameRU={card.nameRU}
                    nameEN={card.nameEN}
                    duration={card.duration}
                    savedMovies={props.savedMovies}
                    setSavedMovies={props.setSavedMovies}
                    liked={props.liked}
                    setLiked={props.setLiked}
                    likeMovie={props.likeMovie}
                    dislikeMovie={props.dislikeMovie}
                  />
            })
            : (
              (props.errorFound)
              ? <h2 className='movies-card-list__error'>Во время запроса произошла ошибка.<br/>Возможно, проблема с соединением или сервер недоступен.<br/>Подождите немного и попробуйте ещё раз</h2>
              : !props.firstSearch
              ? ""
              : (props.cards.length === 0)
                ? <h2 className='movies-card-list__error'>Ничего не найдено</h2>
                : ""
            )
      }

    </div>
  )
}

export default MoviesCardList;
