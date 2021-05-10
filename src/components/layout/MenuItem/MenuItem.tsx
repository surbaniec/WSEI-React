import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ url, linkText, iconUrl, handleClick }) => {
  return (
    <li className='menu__item'>
      <Link
        to={url}
        className='menu__link'
        onClick={() => handleClick(linkText, iconUrl)}
      >
        <img className='menu__item-icon' src={iconUrl} alt='' />
        <span className='menu__item-name'>{linkText}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
