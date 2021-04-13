import { FC, useState } from 'react';
import './DropdownMenu.css';
import useDropdown from 'react-dropdown-hook';
import ExpandedMenu from '../ExpandedMenu/ExpandedMenu';

const DropdownMenu: FC = () => {
  const [selectedPage, setSelectedPage] = useState('Home');

  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  const handleClick = () => {
    toggleDropdown();
  };

  const changeCurrentPageTitle = (title: string) => {
    setSelectedPage(title);
  };

  return (
    <div ref={wrapperRef}>
      <button className='dropdown__btn' onClick={() => handleClick()}>
        <img
          className='dropdown__icon--home'
          src='../../../assets/house2.svg'
          alt='home'
        />
        <span>{selectedPage}</span>
        <img
          className='dropdown__icon--arrow'
          src='../../../assets/arrow-down.svg'
          alt=''
        />
      </button>
      {dropdownOpen && (
        <ExpandedMenu changeCurrentPageTitle={changeCurrentPageTitle} />
      )}
    </div>
  );
};

export default DropdownMenu;
