import React, { FC } from 'react';
import './Filters.css';

const Filters: FC = () => {
  return (
    <div className='filters'>
      <p>
        Rows are filteres by the following conditions starting from the top.
      </p>
      <div className='filters__condition-wrapper'>
        <div className='filters__condition-option'>
          <img src='../../assets/search.svg' alt='' />
          <span>Where</span>
        </div>
        <div className='filters__condition-option'>
          <span>Company</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <span>Contains</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <input type='text' placeholder='Type...' disabled />
        </div>
      </div>
      <div className='filters__condition-wrapper'>
        <div className='filters__condition-option'>
          <img src='../../assets/search.svg' alt='' />
          <span>Where</span>
        </div>
        <div className='filters__condition-option'>
          <span>Status</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <span>Is</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <input type='text' placeholder='Type...' disabled />
        </div>
        <div className='filters__condition-option'>
          <span>In</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <input type='text' placeholder='Entity...' disabled />
        </div>
      </div>
      <div className='filters__condition-wrapper'>
        <div className='filters__condition-option'>
          <img src='../../assets/search.svg' alt='' />
          <span>And</span>
        </div>
        <div className='filters__condition-option'>
          <span>Status</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <span>Ends before</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <input type='text' placeholder='Date...' disabled />
        </div>
        <div className='filters__condition-option'>
          <span>In</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
        <div className='filters__condition-option'>
          <input type='text' placeholder='Entity...' disabled />
        </div>
      </div>
      <div className='filters__condition-add'>
        <div className='filters__condition-option'>
          <img src='../../assets/plus.svg' alt='' />
          <span>Add filter</span>
        </div>
        <div className='filters__condition-option'>
          <span>choose propety</span>
          <img src='../../assets/arrow-down.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Filters;
