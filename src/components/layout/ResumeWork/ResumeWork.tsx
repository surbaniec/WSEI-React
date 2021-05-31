import React, { useContext, useState, useEffect, FC } from 'react';
import { ResumeDataContext } from '../../../App';
import Resume from '../Resume/Resume';
import './ResumeWork.css';

const ResumeWork: FC = () => {
  const resumeData = useContext(ResumeDataContext);
  const [resumes, setResumes] = useState<Object[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');

  useEffect(() => {
    createResumes();
    //eslint-disable-next-line
  }, []);

  const createResumes = (): void => {
    const newResumes: Object[] = [];
    for (let i = 0; i <= 9; i++) {
      const resumeTitle = resumeData['comments'][i].name;
      const resumeContent = resumeData['comments'][i].body;
      const commentsAuthorId = resumeData['comments'][i].postId;

      const resumeAuthor = resumeData['users'][commentsAuthorId].name;
      const resumeAuthorImg = resumeData['photos'][commentsAuthorId].url;

      const newResume = {
        resumeTitle,
        resumeContent,
        resumeAuthor,
        resumeAuthorImg,
      };

      newResumes.push(newResume);
    }
    setResumes(newResumes);
  };

  // hide & display search icon and placeholder depending on focus state
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
    setIsClicked(true);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = 'Filter by title...';
    setIsClicked(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value.toUpperCase());
  };

  if (resumes.length > 0) {
    return (
      <div className='resume-work'>
        <div className='resume__menu'>
          <h2 className='resume-work__title'>Resume your work</h2>
          <div className='searchbar__container'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Filter by title...'
              className='searchbar__input'
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
            />
            {!isClicked && (
              <img
                className='searchbar__icon'
                src='./assets/search.svg'
                alt='search'
              />
            )}
          </div>
          <button className='resume__btn'>
            <img src='../../assets/settings.svg' alt='' />
            <span>Followed</span>
            <img src='../../assets/plus.svg' alt='' />
          </button>
        </div>
        <div className='resume__list'>
          {filterText !== ''
            ? resumes
                .filter((item) =>
                  item['resumeTitle'].toUpperCase().includes(filterText)
                )
                .map((resume) => {
                  return <Resume dataResume={resume} />;
                })
            : resumes.map((resume) => {
                return <Resume dataResume={resume} />;
              })}
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default ResumeWork;
