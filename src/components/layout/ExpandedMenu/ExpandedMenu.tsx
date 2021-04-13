import React from 'react';
import './ExpandedMenu.css';
import { menu1, menu2 } from '../../../data/MenuData';
import { Link } from 'react-router-dom';

const ExpandedMenu = ({ changeCurrentPageTitle }) => {
  const handleClick = (title: string) => {
    changeCurrentPageTitle(title);
  };

  return (
    <div className='expanded-menu'>
      <input
        className='expanded-menu__searchbar'
        type='text'
        placeholder='Filter...'
      />
      <div className='expanded-menu__body'>
        <span className='expanded-menu__section-name'>Platform</span>
        <ul className='menu'>
          {menu1.map((item) => {
            return (
              <li className='menu__item'>
                <Link
                  to={item.url}
                  className='menu__link'
                  onClick={() => handleClick(item.linkText)}
                >
                  <img className='menu__item-icon' src={item.iconUrl} alt='' />
                  <span className='menu__item-name'>{item.linkText}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <span className='expanded-menu__section-name'>Workspaces</span>
        <ul className='menu'>
          {menu2.map((item) => {
            return (
              <li className='menu__item'>
                <Link
                  to={item.url}
                  className='menu__link'
                  onClick={() => handleClick(item.linkText)}
                >
                  <img className='menu__item-icon' src={item.iconUrl} alt='' />
                  <span className='menu__item-name'>{item.linkText}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='expanded-menu__footer'>
        <span className='expanded-menu__section-name'>Account</span>
        <ul className='menu'>
          <li className='menu__item'>
            <Link
              to='/profile'
              className='menu__profile-link'
              onClick={() => handleClick('Account')}
            >
              {/* eslint-disable-next-line */}
              <img
                className='menu__item-icon account-icon'
                src='https://secure.gravatar.com/avatar/1fd4fb5e1c8d00621b32a36a54b67b50?s=256&d=mm&r=g'
                alt=''
              />
              <div className='menu__item-inner-wrapper'>
                <span className='menu__item-username'>Humberta Swift</span>
                <button className='menu__item-profile-btn'>See profile</button>
              </div>
            </Link>
          </li>
          <li className='menu__item'>
            <Link
              to='/testpage'
              className='menu__link'
              onClick={() => handleClick('Privacy')}
            >
              {' '}
              <img
                className='menu__item-icon'
                src='./assets/privacy.svg'
                alt=''
              />
              <span className='menu__item-name'>Privacy</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link
              to='/testpage'
              className='menu__link'
              onClick={() => handleClick('Settings')}
            >
              {' '}
              <img
                className='menu__item-icon'
                src='./assets/settings.svg'
                alt=''
              />
              <span className='menu__item-name'>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='expanded-menu__logout'>
        <Link
          to='/testpage'
          style={{
            textDecoration: 'none',
          }}
        >
          <button className='expanded-menu__logout-btn'>
            <img
              className='expanded-menu__logout-icon'
              src='./assets/logout.svg'
              alt='logout icon'
            />
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExpandedMenu;
