import { FC } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar: FC = () => {
  return (
    <div className='sidebar-container'>
      <div className='profile-card'>
        <div className='profile-card-header'>
          {/* eslint-disable-next-line */}
          <img
            src='https://secure.gravatar.com/avatar/1fd4fb5e1c8d00621b32a36a54b67b50?s=256&d=mm&r=g'
            alt='profile picture'
            className='user-picture'
          />
          <span className='user-name'>Humberta Swift</span>
          <span className='user-job'>Job title - Company</span>
        </div>
        <div className='profile-card-footer'>
          <div className='profile-card-footer-wrapper'>
            <img src='./assets/network.png' alt='network' />
            <Link to='' className='profile-link'>
              Your network
            </Link>
            <Link to='' className='profile-card-btn'>
              <img src='./assets/network.svg' alt='network' />
            </Link>
          </div>
          <div className='profile-card-footer-wrapper'>
            <img src='./assets/people.svg' alt='publications' />
            <Link to='' className='profile-link'>
              Your publications
            </Link>
            <Link to='' className='profile-card-btn'>
              <img src='./assets/plus.svg' alt='publications' />
            </Link>
          </div>
        </div>
      </div>
      <Link to='' className='sidebar-link'>
        <img src='./assets/ecosystem.svg' alt='publications' />
        <span>Publications</span>
      </Link>
      <Link to='' className='sidebar-link'>
        <img src='./assets/ecosystem.svg' alt='ecosystem' />
        <span>Ecosystem</span>
      </Link>
      <Link to='' className='sidebar-link'>
        <img src='./assets/entities2.svg' alt='entities' />
        <span>Entities</span>
      </Link>
    </div>
  );
};

export default SideBar;
