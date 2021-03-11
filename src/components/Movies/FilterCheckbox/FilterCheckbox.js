import React from 'react';
import './FilterCheckbox.css';

// фильтр с чекбоксом «Только короткометражки»
function FilterCheckbox (props) {

  function handleToggleFilterCheck(e){
    if (props.filterCheckBoxOn) {
      props.setFilterCheckBoxOn(false)
    } else {
      props.setFilterCheckBoxOn(true)
    }
  }

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__container' htmlFor='checkbox'>
        <input className='filter-checkbox_invisible' onClick={(e)=>{handleToggleFilterCheck(e)}} type="checkbox" id='checkbox' value='Короткометражки'></input>
        <span className="filter-checkbox_visible"></span>
        <span className='filter-checkbox_text'>Короткометражки</span>
      </label>
    </div>
  )
}

export default FilterCheckbox;