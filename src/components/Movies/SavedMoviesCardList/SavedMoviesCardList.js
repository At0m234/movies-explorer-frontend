import React from 'react';
import './SavedMoviesCardList.css';

import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function SavedMoviesCardList (props) {
  return (
    <div className='saved-movies-card-list'>
      {
        (props.savedMovies.length > 0)
        ? props.savedMovies.map((card) => {
            return <SavedMoviesCard
              key={card.movieId}
              card={card}
              trailer={card.trailerLink}
              src={card.image}
              nameRU={card.nameRU}
              nameEN={card.nameEN}
              duration={card.duration}
              liked={props.liked}
              likedMovie={props.likedMovie}
              savedMovies={props.savedMovies}
              setSavedMovies={props.setSavedMovies}
              likeMovie={props.likeMovie}
              dislikeMovie={props.dislikeMovie}
            />
          })
          : "У Вас нет сохраненных фильмов"
      }
    </div>
  )
}

export default SavedMoviesCardList;
