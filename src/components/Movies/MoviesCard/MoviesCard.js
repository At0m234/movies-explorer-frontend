import React from 'react';
import './MoviesCard.css';

// компонент одной карточки фильма
function MoviesCard (props) {

  function movieDuration(min) {
    const hours = (min/60);
    const hoursRemnant = ((min % 60) / 60);
    const minutes = (min % 60);
    const movieTime = Math.ceil(hours - hoursRemnant) + ' ч ' + minutes + ' м';
    return movieTime;
  }

  function dislike() {
    props.setAllMovies(props.allMovies.map((elem, ind) => {
      if (props.card.id === elem.id) {
        elem.liked = false;
        return elem;
      } else {
        return elem;
      }
    }))
    localStorage.setItem("allMovies", JSON.stringify(props.allMovies))
  }

  function like() {
    props.setAllMovies(props.allMovies.map((elem, ind) => {
      if (props.card.id === elem.id) {
        elem.liked = true;
        return elem;
      } else {
        return elem;
      }
    }))

    props.setSavedMovies(props.savedMovies.map((elem, ind) => {
      if (props.card.id === elem.id) {
        elem.liked = true;
        return elem;
      } else {
        return elem;
      }
    }))
    localStorage.setItem("savedMovies", JSON.stringify(props.savedMovies))
  }

  return (
    <div className='movies-card'>
      <a href={props.card.trailerLink} target='/blank'><img className='movies-card__image' src={props.card.image.url ? props.card.image.url : ""} alt={props.card.nameEN}></img></a>
      <div className='movies-card__container'>
        <h2 className='movies-card__container_title'>{props.card.nameRU}</h2>
        {
          (
          (props.card.liked && props.card.liked === true)
          ? <button className='movies-card__container_btn movies-card__container_btn-liked' onClick={() => props.dislikeMovie(props.card, dislike)}></button>
          : <button className='movies-card__container_btn movies-card__container_btn-like' onClick={() => props.likeMovie(props.card, like)}></button>

          )
        }
      </div>
      <p className='movies-card__duration'>{movieDuration(props.card.duration)}</p>
    </div>
  )
}

export default MoviesCard;
