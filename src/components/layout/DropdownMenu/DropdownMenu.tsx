import { FC, useState } from 'react';
import './DropdownMenu.css';
import useDropdown from 'react-dropdown-hook';
import ExpandedMenu from '../ExpandedMenu/ExpandedMenu';

const DropdownMenu: FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('Home');
  const [currentMenuIcon, setCurrentMenuIcon] = useState<string>(
    '../../../assets/house2.svg'
  );

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const handleClick = (): void => {
    toggleDropdown();
  };

  const changeCurrentPageTitle = (title: string): void => {
    setSelectedPage(title);
  };

  const changeCurrentMenuIcon = (iconUrl: string): void => {
    setCurrentMenuIcon(iconUrl);
  };

  return (
    <div ref={wrapperRef}>
      <button className='dropdown__btn' onClick={() => handleClick()}>
        <img
          className='dropdown__icon--home'
          src={currentMenuIcon}
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
        <ExpandedMenu
          changeCurrentPageTitle={changeCurrentPageTitle}
          changeCurrentMenuIcon={changeCurrentMenuIcon}
        />
      )}
    </div>
  );
};

export default DropdownMenu;
