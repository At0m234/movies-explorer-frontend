import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import searchIcon from '../../../images/search-icon.svg';

// форма поиска, куда пользователь будет вводить запрос
function SearchForm () {
  return (
    <div className='searchForm'>
      <div className='searchForm__container'>
        <img className='searchForm__container_image' src={searchIcon} alt='Лупа'></img>
        <input className='searchForm__container_input' placeholder='Фильм' required pattern="[A-Za-zА-Яа-яЁё0-9 -]{1,40}"></input>
        <button className='searchForm__container_btn'></button>
      </div>
      <hr className='searchForm__container_underline'></hr>
      <FilterCheckbox/>
      </div>
  )
}

export default SearchForm;