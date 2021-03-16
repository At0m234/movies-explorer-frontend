import React from 'react';
import './SavedMoviesCard.css';

// компонент одной карточки фильма
function SavedMoviesCard (props) {

  function movieDuration(min) {
    const hours = (min/60);
    const hoursRemnant = ((min % 60) / 60);
    const minutes = (min % 60);
    const movieTime = Math.ceil(hours - hoursRemnant) + ' ч ' + minutes + ' м';
    return movieTime;
  }

  function dislike() {
    props.setSavedMovies(props.savedMovies.filter((elem, ind) => {
      if (props.card.id !== elem.id) {
        return true;
      } else {
        return false;
      }
    }))
    localStorage.setItem("savedMovies", JSON.stringify(props.savedMovies));
    props.setAllMovies(props.allMovies.map((elem, ind) => {
      if (props.card.id === elem.id) {
        elem.liked = false;
        return elem;
      } else {
        return elem;
      }
    }))
  }

  return (
    <div className='saved-movies-card'>
      <a href={props.card.trailerLink} target='/blank'><img className='saved-movies-card__image' src={props.card.image.url ? props.card.image.url : ""} alt={props.card.nameEN}></img></a>
      <div className='saved-movies-card__container'>
        <h2 className='saved-movies-card__container_title'>{props.card.nameRU}</h2>
          <button className='saved-movies-card__container_btn saved-movies-card__container_btn-remove' onClick={() => props.dislikeMovie(props.card,dislike)}></button>
      </div>
      <p className='saved-movies-card__duration'>{movieDuration(props.card.duration)}</p>
    </div>
  )
}

export default SavedMoviesCard;
