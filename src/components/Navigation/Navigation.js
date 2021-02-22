import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

// компонент, который отвечает за меню навигации на сайте
function Navigation () {
  return (
    <div className='navigation'>
      <Link to='/movies'>
        <button className='navigation__movies' type='submit'>Фильмы</button>
      </Link>
      <Link to='/saved-movies'><button className='navigation__saved-movies' type='submit'>Сохранённые фильмы</button></Link>
    </div>
  );
}

export default Navigation;