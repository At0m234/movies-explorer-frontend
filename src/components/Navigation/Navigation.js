import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

// компонент, который отвечает за меню навигации на сайте
function Navigation () {
  return (
    <nav className='navigation'>
      <NavLink to='/movies' className='navigation__link'>Фильмы</NavLink>
      <NavLink to='/saved-movies' className='navigation__link'>Сохранённые фильмы</NavLink>
    </nav>
  );
}

export default Navigation;