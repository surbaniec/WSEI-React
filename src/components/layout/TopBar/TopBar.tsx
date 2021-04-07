import { FC } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import NotificationPanel from '../NotificationPanel/NotificationPanel';
import SearchBar from '../SearchBar/SearchBar';
import './TopBar.css';

export const TopBar: FC = () => {
  return (
    <div className='topbar-container'>
      <img src='../../../assets/logo.png' className='topbar__logo' alt='logo' />
      <DropdownMenu />
      <SearchBar />
      <NotificationPanel />
    </div>
  );
};

export default TopBar;
