import { FC } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar: FC = () => {
  return (
    <div className='sidebar-container'>
      <div className='profile-card'>
        <div className='profile-card__header'>
          {/* eslint-disable-next-line */}
          <img
            src='https://secure.gravatar.com/avatar/1fd4fb5e1c8d00621b32a36a54b67b50?s=256&d=mm&r=g'
            alt='profile picture'
            className='profile-card__avatar'
          />
          <span className='profile-card__name'>Humberta Swift</span>
          <span className='profile-card__job'>Job title - Company</span>
        </div>
        <div className='profile-card__footer'>
          <div className='profile-card__footer-wrapper'>
            <img
              className='profile-card__icon'
              src='./assets/network.png'
              alt='network'
            />
            <Link to='/testpage' className='profile-card__link'>
              Your network
            </Link>
            <Link to='testpage' className='profile-card__btn'>
              <img
                className='profile-card__icon'
                src='./assets/network.svg'
                alt='network'
              />
            </Link>
          </div>
          <div className='profile-card__footer-wrapper'>
            <img
              className='profile-card__icon'
              src='./assets/people.svg'
              alt='publications'
            />
            <Link to='testpage' className='profile-card__link'>
              Your publications
            </Link>
            <Link to='testpage' className='profile-card__btn'>
              <img
                className='profile-card__icon'
                src='./assets/plus.svg'
                alt='publications'
              />
            </Link>
          </div>
        </div>
      </div>
      <ul className='sidebar__menu'>
        <li className='sidebar__menu-item'>
          <Link to='/testpage' className='sidebar__menu-link'>
            <img
              className='sidebar__menu-icon'
              src='./assets/ecosystem.svg'
              alt='publications'
            />
            <span className='sidebar__menu-title'>Publications</span>
          </Link>
        </li>
        <li className='sidebar__menu-item'>
          <Link to='/testpage' className='sidebar__menu-link'>
            <img
              className='sidebar__menu-icon'
              src='./assets/ecosystem.svg'
              alt='ecosystem'
            />
            <span className='sidebar__menu-title'>Ecosystem</span>
          </Link>
        </li>
        <li className='sidebar__menu-item'>
          <Link to='' className='sidebar__menu-link'>
            <img
              className='sidebar__menu-icon'
              src='./assets/entities2.svg'
              alt='entities'
            />
            <span className='sidebar__menu-title'>Entities</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
