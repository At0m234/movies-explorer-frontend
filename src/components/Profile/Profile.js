import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './Profile.css';

// компонент страницы изменения профиля
function Profile () {
  const history = useHistory();
  const profileName = localStorage.getItem('name');
  const profileEmail = localStorage.getItem('email');

  const [userName, setUserName] = useState(profileName);
  const [userEmail, setUserEmail] = useState(profileEmail);

  function patchUser() {

  }

  function handleSignOut() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <section className='profile'>
      <h1 className='profile__greeting-title'>{'Привет, ' + profileName + '!'}</h1>
      <div className='profile__info'>
        <p className='profile__info_text'>Имя</p>
        <p className='profile__info_user'>{profileName}</p>
      </div>
        <hr className='profile__info_line'></hr>
      <div className='profile__info'>
        <p className='profile__info_text'>Почта</p>
        <p className='profile__info_user'>{profileEmail}</p>
      </div>
        <button className='profile__edit-btn' onClick={patchUser}>Редактировать</button>
        <NavLink to='/' className='profile__signout-btn' onClick={handleSignOut}>Выйти из аккаунта</NavLink>
    </section>
  )
}

export default Profile;