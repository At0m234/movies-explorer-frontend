import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

// компонент, который отвечает за меню навигации на сайте
function Navigation (props) {

  function handleChange(e) {
    props.setFilterCheckBoxOn(false)
  }
  
  return (
    <nav className='navigation'>
      <NavLink to='/movies' className='navigation__link' onClick={(e) => {handleChange(e)}} >Фильмы</NavLink>
      <NavLink to='/saved-movies' className='navigation__link'  onClick={(e) => {handleChange(e)}}>Сохранённые фильмы</NavLink>
    </nav>
  );
}

export default Navigation;