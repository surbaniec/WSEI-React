import { FC } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import NotificationPanel from '../NotificationPanel/NotificationPanel';
import SearchBar from '../SearchBar/SearchBar';
import './TopBar.css';
import { Link } from 'react-router-dom';

export const TopBar: FC = () => {
  return (
    <div className='topbar-container'>
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        <img
          src='../../../assets/logo.png'
          className='topbar__logo'
          alt='logo'
        />
      </Link>

      <DropdownMenu />
      <SearchBar cssClass={'searchbar__input'} />
      <NotificationPanel />
    </div>
  );
};

export default TopBar;
