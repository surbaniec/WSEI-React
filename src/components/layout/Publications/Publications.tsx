import React, { useContext, useEffect, useState } from 'react';
import { PostsDataContext } from '../../../App';
import Publication from '../Publication/Publication';
import './Publications.css';

const Publications = () => {
  const postsData = useContext(PostsDataContext);
  const [publications, setPublications] = useState<Object[]>([]);

  useEffect(() => {
    createPosts();
  }, []);

  const createPosts = () => {
    const newPublications: Object[] = [];
    for (let i = 0; i <= 3; i++) {
      const randomNumber = Math.floor(Math.random() * 30);

      const postTitle = postsData['posts'][randomNumber].title;
      const postAuthorId = postsData['posts'][randomNumber].userId;
      const postImgId = postsData['posts'][randomNumber].id;

      const postAuthor = postsData['users'][postAuthorId].name;
      const postImg = postsData['photos'][postImgId].url;

      const newPublication = { postTitle, postImg, postAuthor };

      newPublications.push(newPublication);
    }
    setPublications(newPublications);
  };

  if (publications.length > 0) {
    return (
      <div className='publications'>
        <div className='publications__main-post'>
          <img
            src={publications[1]['postImg']}
            alt=''
            className='publications__main-img'
          />
          <div className='publications__main-post-body'>
            <p className='publications__main-title'>
              {publications[1]['postTitle']}
            </p>

            <div className='publications__post-author'>
              <span className='publications__post-date'>7 jan. 2020</span>
              <img
                src={publications[1]['postImg']}
                alt=''
                className='publications__post-author-img'
              />
              <span className='publications__post-author-name'>
                {publications[1]['postAuthor']}
              </span>
            </div>
          </div>
        </div>
        <div className='publications__latest-publications'>
          <h2 className='publications__latest-publications-title'>
            Latest publications
          </h2>
          <Publication post={publications[1]} />
          <Publication post={publications[2]} />
          <Publication post={publications[3]} />
          <a href='#' className='publications__more-publications'>
            See more publications
          </a>
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Publications;
