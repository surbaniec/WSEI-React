import React, { FC, useContext } from 'react';
import { CurrentUserContext } from '../../App';
import './Profile.css';

const Profile: FC = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className='profile__container'>
      <div className='profile__header'>
        <div className='profile__actions'>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/message.svg'
              alt=''
            />
            <span>Message</span>
          </div>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/edit-document.svg'
              alt=''
            />
            <span>Create a request</span>
          </div>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/folder.svg'
              alt=''
            />
            <span>Add to a cluster</span>
          </div>
          <div className='profile__actions-option'>
            <img
              className='profile__actions-img'
              src='../../assets/x.svg'
              alt=''
            />
          </div>
        </div>
        <div className='profile__header-profile'>
          <div className='profile__header-profile-info'>
            <img
              className='profile__header-profile-img'
              src={
                currentUser
                  ? currentUser['thumbnailUrl']
                  : 'https://secure.gravatar.com/avatar/1fd4fb5e1c8d00621b32a36a54b67b50?s=256&d=mm&r=g'
              }
              alt=''
            />
            <div className='profile__header-profile-desc'>
              {' '}
              <span className='profile__header-profile-name'>
                {currentUser ? currentUser['name'] : 'username'}
              </span>
              <span>New York Partner</span>
            </div>
          </div>
          <div className='profile__header-profile-contact'>
            <span>humbertaswift@gmail.com</span>
            <span>+33 (0)6 12 34 56 78</span>
          </div>
          <button className='profile__editBtn'>
            <img src='../../assets/pen.svg' alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
