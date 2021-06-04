import React, { FC } from 'react';
import './Entity.css';

interface IProps {
  photoUrl: string;
  title: string;
  text: string;
}

const Entity: FC<IProps> = ({ photoUrl, title, text }) => {
  return (
    <div className='entity'>
      <div className='entity__img-wrapper'>
        <img className='entity__img' src={photoUrl} alt='' />
      </div>
      <div className='entity__body'>
        <h3 className='entity__title'>{title}</h3>
        <p className='entity__text'>{text}</p>
      </div>
    </div>
  );
};

export default Entity;
