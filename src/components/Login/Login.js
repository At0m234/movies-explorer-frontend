import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

// компонент страницы авторизации
function Login () {
  return (
    <section className='login'>
      <form className='login__form'>
        <label className='login__form_label' htmlFor='email'>E-mail</label>
        <input className='login__form_input' name='email' type='email' placeholder='Введите почту' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
        <label className='login__form_label' htmlFor='password'>Пароль</label>
        <input className='login__form_input' name='password' type='password' placeholder='Введите пароль'></input>
        <button className='login__form_submit' type='submit'>Войти</button>
        <span className='login__form_text'>Еще не зарегистрированы?<Link to="/signup" className="login__form_register">Регистрация</Link></span>
      </form>
    </section>
  )
}

export default Login;