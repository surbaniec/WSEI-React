import React from 'react';
import './Resume.css';

interface IProps {
  dataResume: Object;
}

const Resume = (dataResume: IProps) => {
  return (
    <div className='resume'>
      <h3 className='resume__title'>{dataResume.dataResume['resumeTitle']}</h3>
      <p className='resume__content'>
        {dataResume.dataResume['resumeContent']}
      </p>
      <div className='resume__info'>
        <img
          src={dataResume.dataResume['resumeAuthorImg']}
          alt=''
          className='resume__img'
        />
        <span className='resume__author'>
          {dataResume.dataResume['resumeAuthor']}
        </span>
        <img src='../../assets/entities2.svg' alt='' className='resume__img' />
        <span className='resume__type'>Corporate</span>
        <span className='resume__update'>
          Updated 3 days ago by {dataResume.dataResume['resumeAuthor']}
        </span>
      </div>
    </div>
  );
};

export default Resume;
