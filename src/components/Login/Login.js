import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

// компонент страницы авторизации
function Login (props) {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  // функция обработки изменений в поле "email"
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  // функция обработки изменений в поле "пароль"
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  // функция обработки кнопки сабмита формы логина
  function handleLoginSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <section className='login'>
      <form className='login__form' method="POST" onSubmit={handleLoginSubmit}>
        <label className='login__form_label' htmlFor='email'>E-mail</label>
        <input className='login__form_input' id='email' onChange={handleEmailChange} type='email' placeholder='Введите почту' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
        <label className='login__form_label' htmlFor='password'>Пароль</label>
        <input className='login__form_input' id='password' onChange={handlePasswordChange} type='password' placeholder='Введите пароль' required></input>
        <button className='login__form_submit' type='submit'>Войти</button>
        <h2 className='login__form_text'>Еще не зарегистрированы?<Link to="/signup" className="login__form_register">Регистрация</Link></h2>
      </form>
    </section>
  )
}

export default Login;