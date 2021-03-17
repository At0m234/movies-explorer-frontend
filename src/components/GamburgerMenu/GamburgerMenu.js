import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './GamburgerMenu.css';

// компонент меню, открывающегося по клику на кнопку "гамбургер"
function GamburgerMenu () {
  const [isGamMenuOpen, setIsGamMenuOpen] = useState(false);

  function openGamMenu () {
    setIsGamMenuOpen(true);
  }

  function closeGamMenu() {
    setIsGamMenuOpen(false)
  }

  if (isGamMenuOpen === false) {
    return (
      <div className='gamburger-menu'>
        <button className='gamburger-menu__btn' onClick={openGamMenu}>
          <span></span>
        </button>
      </div>
    )
  } else {
    return (
      <div className='gamburger-menu'>
        <div className='gamburger-menu__container gamburger-menu__container_overlay' onClick={closeGamMenu}>
          <nav className='gamburger-menu__links gamburger-menu__links_active'>
              <NavLink className='gamburger-menu__link' exact to='/' onClick={closeGamMenu}>Главная</NavLink>
              <NavLink className='gamburger-menu__link' to='/movies' onClick={closeGamMenu}>Фильмы</NavLink>
              <NavLink className='gamburger-menu__link' to='/saved-movies' onClick={closeGamMenu}>Сохраненные фильмы</NavLink>
              <NavLink className='gamburger-menu__link' to='/profile' onClick={closeGamMenu}><button className='gamburger-menu__link_btn'></button></NavLink>
          </nav>
        </div>
        <button className='gamburger-menu__btn gamburger-menu__btn_active' onClick={closeGamMenu}>
          <span></span>
        </button>
      </div>
    )
  }
}

export default GamburgerMenu;