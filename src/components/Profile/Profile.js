import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

import './Profile.css';

// компонент страницы изменения профиля
function Profile (props) {

  useEffect(() => {
    props.setEditFormValid(true)
  }, [props.emailError, props.nameError])

  return (
    <section className='profile'>
      <h1 className='profile__greeting-title'>{'Привет, ' + props.currentUser.name + '!'}</h1>

        <form className='profile__info'>
          <p className='profile__info_text'>Имя</p>
          { (props.isEditing)
          ? <input className='profile__info_user' onChange={(e) => {props.nameHandler(e)}} onBlur={e => props.blurHandler(e)} name='name'></input>
          : <input className='profile__info_user' disabled={true} onBlur={e => props.blurHandler(e)} name='name' value={props.currentUser.name} />
          }
          <div></div>
          {(props.nameInvalid && props.nameError) && <div className='profile__info_user-error'>{props.nameError}</div>}
        </form>

        <hr className='profile__info_line'></hr>

        <form className='profile__info'>
          <p className='profile__info_text'>Почта</p>
          { (props.isEditing)
          ? <input className='profile__info_user' onChange={(e) => {props.emailHandler(e)}} onBlur={e => props.blurHandler(e)} name='email'></input>
          : <input className='profile__info_user' disabled={true} onBlur={e => props.blurHandler(e)} name='email' value={props.currentUser.email} />
          }
          <div></div>
          {(props.emailInvalid && props.emailError) && <div className='profile__info_user-error'>{props.emailError}</div>}
        </form>
        {props.isLoading === true ? <Preloader/> : ""}
        {props.editError === true ? <div className='profile__info_submit-error'>{props.editMessage}</div> : <div className='profile__info_submit-success'>{props.editMessage}</div>}
        <button className='profile__edit-btn' onClick={props.handleEditProfileBtn} disabled={!props.editFormValid}>{props.isEditing ? 'Сохранить' : 'Редактировать'}</button>
        <NavLink to='/' className='profile__signout-btn' onClick={props.onSignOut}>Выйти из аккаунта</NavLink>
    </section>
  )
}

export default Profile;