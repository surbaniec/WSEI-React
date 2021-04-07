import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NotificationPanel.css';

const NotificationPanel: FC = () => {
  return (
    <div className='notification-container'>
      <Link to='/'>
        <img src='./assets/house.svg' alt='home' />
      </Link>
      <div className='notification__icon-wrapper'>
        <img src='./assets/comments.svg' alt='messages' />
      </div>
      <div className='notification__icon-wrapper'>
        {' '}
        <img src='./assets/bell.svg' alt='notifications' />
      </div>
    </div>
  );
};

export default NotificationPanel;
