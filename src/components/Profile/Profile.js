import React from 'react';
import { Link } from 'react-router-dom';

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
        <hr className='profile__info_line' noshade='true'></hr>
      <div className='profile__info'>
        <p className='profile__info_text'>Почта</p>
        <p className='profile__info_user'>111@mail.ru</p>
      </div>
        <button className='profile__edit-btn'>Редактировать</button>
        <button className='profile__signout-btn'><Link to='/' className='profile__signout-btn_redirect'>Выйти из аккаунта</Link></button>
    </section>
  )
}

export default Profile;