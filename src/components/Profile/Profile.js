import React from 'react';
import { NavLink } from 'react-router-dom';

import './Profile.css';

// компонент страницы изменения профиля
function Profile () {
  return (
    <section className='profile'>
      <h1 className='profile__greeting-title'>Привет, First!</h1>
      <div className='profile__info'>
        <p className='profile__info_text'>Имя</p>
        <p className='profile__info_user'>First</p>
      </div>
        <hr className='profile__info_line'></hr>
      <div className='profile__info'>
        <p className='profile__info_text'>Почта</p>
        <p className='profile__info_user'>111@mail.ru</p>
      </div>
        <button className='profile__edit-btn'>Редактировать</button>
        <NavLink to='/' className='profile__signout-btn'>Выйти из аккаунта</NavLink>
    </section>
  )
}

export default Profile;