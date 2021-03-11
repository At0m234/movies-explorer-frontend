import React from 'react';
import './SearchForm.css';
import searchIcon from '../../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


// форма поиска, куда пользователь будет вводить запрос
function SearchForm(props) {

  return (
    <form className='searchForm' noValidate onSubmit={props.onSearchMoviesFormSubmit}>
      <div className='searchForm__container'>
        <img className='searchForm__container_image' src={searchIcon} alt='Лупа'></img>
        <input className='searchForm__container_input'
          onBlur={e => props.blurHandler(e)}
          onChange={e => props.hadnlefilmInputSearchChange(e)}
          type='text'
          placeholder='Фильм'
          name='filmInput'
          value={props.filmInput}
          required
          pattern="[A-Za-zА-Яа-яЁё0-9 -]{1,40}">
        </input>
        <button className='searchForm__container_btn'></button>
      </div>
      {
        (props.filmInputSearchInvalid && props.filmInputSearchError) && <div className='searchForm__container_input-error'>{props.filmInputSearchError}</div>
      }
      <hr className='searchForm__container_underline'></hr>
      <FilterCheckbox
        filterCheckBoxOn={props.filterCheckBoxOn}
        setFilterCheckBoxOn={props.setFilterCheckBoxOn}
      />
    </form>
  )
}

export default SearchForm;