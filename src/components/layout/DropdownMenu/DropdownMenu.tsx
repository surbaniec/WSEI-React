import { FC } from 'react';
import './DropdownMenu.css';
import useDropdown from 'react-dropdown-hook';
import ExpandedMenu from '../ExpandedMenu/ExpandedMenu';

const DropdownMenu: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  const handleClick = () => {
    toggleDropdown();
  };

  return (
    <div ref={wrapperRef}>
      <button className='dropdown__btn' onClick={() => handleClick()}>
        <img
          className='dropdown__icon--home'
          src='../../../assets/house2.svg'
          alt='home'
        />
        <span>Home</span>
        <img
          className='dropdown__icon--arrow'
          src='../../../assets/arrow-down.svg'
          alt=''
        />
      </button>
      {dropdownOpen && <ExpandedMenu />}
    </div>
  );
};

export default DropdownMenu;
