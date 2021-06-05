import React, { FC } from 'react';
import './Popup.css';

interface IProps {
  message: string;
}

const Popup: FC<IProps> = ({ message }) => {
  return (
    <div className='popup'>
      <span className='popup__message'>{message}</span>
    </div>
  );
};

export default Popup;
