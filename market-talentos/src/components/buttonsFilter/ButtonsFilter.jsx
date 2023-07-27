import React from 'react';
import { roles } from '../../services/dates';
import { useDispatch } from 'react-redux';
import { actionFilterTalentAsync, actionGetTalentAsync } from '../../redux/actions/validateTalentActions';
import "./styleButtonsFilter.scss";

const ButtonsFilter = () => {

  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "rol";
    dispatch(actionFilterTalentAsync(searchParam, searchValue));
  };
  

  return (
    <>
    <section className='seccionFilter'>
      <div className='seccionFilter__container-filter'>
      <button
        className='seccionFilter__button-all'
        variant="warning"
        onClick={() => {
          dispatch(actionGetTalentAsync());
        }}
      >
        Todas
      </button>
      {roles.map((item) => (
        <button
        className='seccionFilter__button-rol'
          key={item.value}
          variant="warning"
          onClick={() => {
            onFiltered(item.label);
          }}
        >
          {item.label}
        </button>
      ))}
      </div>
    </section>
     

    </>
  )
}

export default ButtonsFilter