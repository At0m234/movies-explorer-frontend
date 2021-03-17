import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

// компонент страницы «Страница не найдена». Он будет содержать 404 ошибку при попытке перейти на несуществующую страницу
function NotFound () {
  const history = useHistory();

  return (
    <section className='not-found'>
      <h1 className='not-found__error'>404</h1>
      <h2 className='not-found__text'>Страница не найдена</h2>
      <button className='not-found__submit' type='submit' onClick={() => history.goBack()}>Назад</button>
    </section>
  )
}

export default NotFound;