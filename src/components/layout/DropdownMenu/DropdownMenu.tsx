import { FC } from 'react';
import './DropdownMenu.css';

const DropdownMenu: FC = () => {
  return (
    <div className='dropdown-container'>
      <img src='../../../assets/house2.svg' alt='home' />
      <button className='dropdown-btn'>
        Home
        <img src='../../../assets/arrow-down.svg' alt='' />
      </button>
    </div>
  );
};

export default DropdownMenu;
