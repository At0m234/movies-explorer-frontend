import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Dimensions } from 'react-native';
import './GamburgerMenu.css';

// компонент меню, открывающегося по клику на кнопку "гамбургер"
function GamburgerMenu () {

  const windowWidth = Dimensions.get('window').width;

  function openGamMenu () {
    const gamBtn = document.querySelector('.gamburger-menu__btn');
    const navMenu = document.querySelector('.gamburger-menu__links')
    const gamSect = document.querySelector('.gamburger-menu__container')

    gamBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      gamBtn.classList.toggle('gamburger-menu__btn_active');
      navMenu.classList.toggle('gamburger-menu__links_active');
      gamSect.classList.toggle('gamburger-menu__container_overlay');
    })

  }

  if (windowWidth === 1279 || windowWidth < 1279) {
    return (
      <div className='gamburger-menu'>
        <div className='gamburger-menu__container'>
          <nav className='gamburger-menu__links'>
              <NavLink className='gamburger-menu__link' exact to='/'>Главная</NavLink>
              <NavLink className='gamburger-menu__link' to='/movies'>Фильмы</NavLink>
              <NavLink className='gamburger-menu__link' to='/saved-movies'>Сохраненные фильмы</NavLink>
              <NavLink className='gamburger-menu__link' to='/profile'><button className='gamburger-menu__link_btn'></button></NavLink>
          </nav>
        </div>
        <button className='gamburger-menu__btn' onClick={openGamMenu}>
          <span></span>
        </button>
      </div>
    )
  } else {
    return (
      <Link to='/profile'><button className='gamburger-menu__link_btn'></button></Link>
    )
  }
}

export default GamburgerMenu;