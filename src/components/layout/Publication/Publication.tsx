import React from 'react';
import './Publication.css';

interface IProps {
  postTitle: string;
  postAuthor: string;
  postImg: string;
}

const Publication = ({ post }) => {
  return (
    <div className='post'>
      <img src={post.postImg} alt='' className='post__img' />
      <div className='post__body'>
        <div className='post__title'>{post.postTitle}</div>
        <div className='post__author'>
          <span className='post__date'>7 jan. 2020</span>
          <img src={post.postImg} alt='' className='post__author-img' />
          <span className='post__author-name'>{post.postAuthor}</span>
        </div>
      </div>
    </div>
  );
};

export default Publication;
