import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

// компонент страницы регистрации
function Register () {
  return (
    <section className='register'>
      <form className='register__form'>
        <label className='register__form_label' htmlFor='name'>Имя</label>
        <input className='register__form_input' name='name'  type='text' placeholder='Введите имя' pattern="[A-Za-zА-Яа-яЁё -]{1,}"></input>
        <label className='register__form_label' htmlFor='email'>E-mail</label>
        <input className='register__form_input' name='email' type='email' placeholder='Введите почту' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
        <label className='register__form_label' htmlFor='password'>Пароль</label>
        <input className='register__form_input' name='password' type='password' placeholder='Введите пароль' pattern="[A-Za-z0-9]{8,20}"></input>
        <button className='register__form_submit' type='submit'>Зарегистироваться</button>
        <span className='register__form_text'>Уже зарегистрированы?<Link to="/signin" className="register__form_login">Войти</Link></span>
      </form>
    </section>
  )
}

export default Register;