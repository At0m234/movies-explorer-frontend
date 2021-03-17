import React, { useEffect } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import './Header.css'

import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';
import GamburgerMenu from '../GamburgerMenu/GamburgerMenu';

// компонент, который отрисовывает шапку сайта на страницу
function Header(props) {
  useEffect(() => {
  },[props.windowWidth])

  return (
    <header className='header'>
        {
        (props.isLogged === true)
        ? <Switch>
            <Route path='/'>
              <div className='header__profile-container'>
                <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
                <Navigation
                setFilterCheckBoxOn={props.setFilterCheckBoxOn}
                />
                {
                  (props.windowWidth === 1279 || props.windowWidth < 1279)
                  ? <GamburgerMenu/>
                  : <NavLink to='/profile'className='gamburger-menu__link_btn'></NavLink>
                }
              </div>
            </Route>

          </Switch>
        :
          <Switch>

            <Route exact path='/'>
              <div className='header__main-container'>
                <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
                <div className='header__btns_container'>
                  <NavLink to='/signup' className='header__register'>Регистрация</NavLink>
                  <NavLink to='/signin' className='header__login'>Войти</NavLink>
                </div>
              </div>
            </Route>

            <Route exact path='/signup'>
              <div className='header__sign-container'>
                <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
                <h1 className='header__sign-title_text'>Добро пожаловать!</h1>
              </div>
            </Route>

            <Route exact path='/signin'>
              <div className='header__sign-container'>
                <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
                <h1 className='header__sign-title_text'>Рады видеть!</h1>
              </div>
            </Route>
          </Switch>
        }
    </header>
  )
}

export default Header;
