import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Header.css'

import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';
import GamburgerMenu from '../GamburgerMenu/GamburgerMenu';

// компонент, который отрисовывает шапку сайта на страницу
function Header () {

  return (
    <header className='header'>
      <Switch>

        <Route exact path='/'>
          <div className='header__main-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <div className='header__btns_container'>
              <Link to='/signup'><button className='header__register' type='submit'>Регистрация</button></Link>
              <Link to='/signin'><button className='header__login' type='submit'>Войти</button></Link>
            </div>
          </div>
        </Route>

        <Route path='/signup'>
          <div className='header__sign-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <h1 className='header__sign-title_text'>Добро пожаловать!</h1>
          </div>
        </Route>

        <Route path='/signin'>
          <div className='header__sign-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <h1 className='header__sign-title_text'>Рады видеть!</h1>
          </div>
        </Route>

        <Route path='/movies'>
          <div className='header__profile-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <Navigation/>
            <GamburgerMenu/>
          </div>
        </Route>

        <Route path='/saved-movies'>
          <div className='header__profile-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <Navigation/>
            <GamburgerMenu/>
          </div>
        </Route>

        <Route path='/profile'>
          <div className='header__profile-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <Navigation/>
            <GamburgerMenu/>
          </div>
        </Route>

      </Switch>
    </header>
  )
}

export default Header;