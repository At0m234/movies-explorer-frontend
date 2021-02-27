import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

// компонент страницы регистрации
function Register (props) {

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  // функция обработки изменений в поле "имя"
  function handleNameChange(e) {
    setName(e.target.value);
  }

  // функция обработки изменений в поле "email"
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  // функция обработки изменений в поле "пароль"
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  // функция обработки кнопки сабмита формы регистрации
  function handleRegisterSubmit(e) {
    e.preventDefault();
    props.onRegister({name, email, password});
  }

  return (
    <section className='register'>
      <form className='register__form' method="POST" onSubmit={handleRegisterSubmit}>
        <label className='register__form_label' htmlFor='name'>Имя</label>
        <input className='register__form_input' id='name' onChange={handleNameChange} type='text' placeholder='Введите имя' required pattern="[A-Z0-9a-zА-Яа-яЁё -]{1,}"></input>
        <label className='register__form_label' htmlFor='email'>E-mail</label>
        <input className='register__form_input' id='email' onChange={handleEmailChange} type='email' placeholder='Введите почту' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
        <label className='register__form_label' htmlFor='password'>Пароль</label>
        <input className='register__form_input' id='password' onChange={handlePasswordChange} type='password' placeholder='Введите пароль' required pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"></input>
        <button className='register__form_submit' type='submit'>Зарегистироваться</button>
        <h2 className='register__form_text'>Уже зарегистрированы?<Link to="/signin" className="register__form_login">Войти</Link></h2>
      </form>
    </section>
  )
}

export default Register;