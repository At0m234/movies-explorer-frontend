import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import './Login.css';

// компонент страницы авторизации
function Login (props) {

  useEffect(() => {
    if(props.emailError || props.passwordError) {
      props.setFormValid(false)
    } else {
      props.setFormValid(true)
    }
  }, [props.emailError, props.passwordError])

  return (
    <section className='login'>
      {props.isLoading === true ? <Preloader/> : ""}
      <form className='login__form' method="POST" onSubmit={props.handlerLoginSubmit}>

        <div className='login__form_container'>
          <label className='login__form_label' htmlFor='email'>E-mail</label>
          <input className='login__form_input' disabled={props.blockForm} onChange={(e)=> props.emailHandler(e)} onBlur={(e)=> props.blurHandler(e)} id='email' name='email' type='email' placeholder='Введите почту'></input>
          {(props.emailInvalid && props.emailError) && <div className='login__form_input-error'>{props.emailError}</div>}
        </div>

        <div className='login__form_container'>
          <label className='login__form_label' htmlFor='password'>Пароль</label>
          <input className='login__form_input' disabled={props.blockForm} onChange={(e)=> props.passwordHandler(e)} onBlur={(e)=> props.blurHandler(e)} id='password' name='password' type='password' placeholder='Введите пароль'></input>
          {(props.passwordInvalid && props.passwordError) && <div className='login__form_input-error'>{props.passwordError}</div>}
        </div>

        <div className='login__form_submit-container'>
          {props.loginError !== "" ? <div className='login__form_submit-error'>{props.loginError}</div> : ""}
          <button className='login__form_submit' type='submit' disabled={!props.formValid}>Войти</button>
          <h2 className='login__form_text'>Еще не зарегистрированы?<Link to="/signup" className="login__form_register">Регистрация</Link></h2>
        </div>

      </form>
    </section>
  )
}

export default Login;