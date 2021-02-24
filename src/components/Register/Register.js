import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

// компонент страницы регистрации
function Register () {
  return (
    <section className='register'>
      <form className='register__form'>
        <label className='register__form_label' htmlFor='name'>Имя</label>
        <input className='register__form_input' id='name'  type='text' placeholder='Введите имя' pattern="[A-Z0-9a-zА-Яа-яЁё -]{1,}"></input>
        <label className='register__form_label' htmlFor='email'>E-mail</label>
        <input className='register__form_input' id='email' type='email' placeholder='Введите почту' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
        <label className='register__form_label' htmlFor='password'>Пароль</label>
        <input className='register__form_input' id='password' type='password' placeholder='Введите пароль' pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"></input>
        <button className='register__form_submit' type='submit'>Зарегистироваться</button>
        <h2 className='register__form_text'>Уже зарегистрированы?<Link to="/signin" className="register__form_login">Войти</Link></h2>
      </form>
    </section>
  )
}

export default Register;