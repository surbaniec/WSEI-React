import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { workspacesData } from '../../../data/WorkspacesData';

interface IProps {
  id: number;
  url: string;
  linkText: string;
  iconUrl: string;
  handleClick: (title: string, iconUrl: string) => void;
}

const MenuItem: FC<IProps> = ({ id, url, linkText, iconUrl, handleClick }) => {
  if (url === '/workspace') {
    return (
      <li className='menu__item'>
        <Link
          to={{
            pathname: '/workspace',
            state: {
              workspacesData: workspacesData[id],
            },
          }}
          className='menu__link'
          onClick={() => handleClick(linkText, iconUrl)}
        >
          <img className='menu__item-icon' src={iconUrl} alt='' />
          <span className='menu__item-name'>{linkText}</span>
        </Link>
      </li>
    );
  }
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
