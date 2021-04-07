import { FC } from 'react';
import './DropdownMenu.css';

const DropdownMenu: FC = () => {
  return (
    <div className='dropdown-container'>
      <img src='../../../assets/house2.svg' alt='home' />
      <button className='dropdown__btn'>
        Home
        <img src='../../../assets/arrow-down.svg' alt='' />
      </button>
      {/* todo: dropdown */}
    </div>
  );
};

export default DropdownMenu;
