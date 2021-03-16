import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import './Register.css';

// компонент страницы регистрации
function Register (props) {

  useEffect(() => {
    if(props.emailError || props.passwordError || props.nameError) {
      props.setFormValid(false)
    } else {
      props.setFormValid(true)
    }
  }, [props.emailError, props.passwordError, props.nameError])

  return (
    <section className='register'>
      {props.isLoading === true ? <Preloader/> : ""}
      <form className='register__form' method="POST" onSubmit={props.handlerRegisterSubmit}>

        <div className='register__form_container'>
          <label className='register__form_label' htmlFor='name'>Имя</label>
          <input className='register__form_input' disabled={props.blockForm} onChange={(e)=> props.nameHandler(e)} onBlur={(e)=> props.blurHandler(e)} id='name' name='name'  type='text' required placeholder='Введите имя' ></input>
          {(props.nameInvalid && props.nameError) && <div className='register__form_input-error'>{props.nameError}</div>}
        </div>

        <div className='register__form_container'>
          <label className='register__form_label' htmlFor='email'>E-mail</label>
          <input className='register__form_input' disabled={props.blockForm} onChange={(e)=> props.emailHandler(e)} onBlur={(e)=> props.blurHandler(e)} id='email' name='email'  type='email' required placeholder='Введите почту' ></input>
          {(props.emailInvalid && props.emailError) && <div className='register__form_input-error'>{props.emailError}</div>}
        </div>

        <div className='register__form_container'>
          <label className='register__form_label' htmlFor='password'>Пароль</label>
          <input className='register__form_input' disabled={props.blockForm} onChange={(e)=> props.passwordHandler(e)} onBlur={(e)=> props.blurHandler(e)} id='password' name='password'  type='password' required placeholder='Введите пароль'></input>
          {(props.passwordInvalid && props.passwordError) && <div className='register__form_input-error'>{props.passwordError}</div>}
        </div>

        <div className='register__form_submit-container'>
          {props.registerError !== "" ? <div className='register__form_submit-error'>{props.registerError}</div> : ""}
          <button className='register__form_submit' type='submit' disabled={!props.formValid}>Зарегистироваться</button>
          <h2 className='register__form_text'>Уже зарегистрированы?<Link to="/signin" className="register__form_login">Войти</Link></h2>
        </div>

      </form>
    </section>
  )
}

export default Register;