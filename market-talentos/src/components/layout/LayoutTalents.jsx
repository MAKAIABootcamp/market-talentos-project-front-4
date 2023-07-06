import React from 'react';
import "./styleLayoutTalents.scss";
import { NavLink } from 'react-router-dom';

const LayoutTalents = () => {
  return (
    <>
        <section className='layoutTalents'>
            <div className='layoutTalents__navbar'>
              <NavLink>
                 <button>Search</button>
                 <button>todos</button>
              </NavLink>

            </div>

        </section>
    </>
  )
}

export default LayoutTalents;