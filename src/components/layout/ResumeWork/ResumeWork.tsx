import React, { useContext, useState, useEffect, FC } from 'react';
import { CurrentUserContext, ResumeDataContext } from '../../../App';
import Resume from '../Resume/Resume';
import './ResumeWork.css';
import useDropdown from 'react-dropdown-hook';
import ReactPaginate from 'react-paginate';

interface IProps {
  title: string;
  showMenu: boolean;
}

const ResumeWork: FC<IProps> = ({ title, showMenu }) => {
  const resumeData = useContext(ResumeDataContext);
  const [resumes, setResumes] = useState<Object[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');
  const [myPosts, setMyPosts] = useState<string>(' ');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const currentUser = useContext(CurrentUserContext);

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  useEffect(() => {
    createResumes();
    //eslint-disable-next-line
  }, []);

  const createResumes = (): void => {
    const newResumes: Object[] = [];
    for (let i = 0; i <= 40; i++) {
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

  const handleClick = (): void => {
    toggleDropdown();
  };

  const filterMyPosts = (): void => {
    setMyPosts(currentUser['name']);
  };
  const filterAllPosts = (): void => {
    setMyPosts(' ');
  };

  const handlePageClick = (data) => {
    const selected = data.selected;
    setCurrentPage(selected);
  };

  if (resumes.length > 0) {
    return (
      <div className='resume-work'>
        <div className='resume__menu'>
          <h2 className='resume-work__title'>{title}</h2>
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
          <div ref={wrapperRef}>
            <button className='resume__btn' onClick={() => handleClick()}>
              <img src='../../assets/settings.svg' alt='' />
              <span>Followed</span>
              <img src='../../assets/plus.svg' alt='' />
            </button>
            {dropdownOpen && (
              <div className='resume__dropdown'>
                <button
                  className='resume__dropdown-btn'
                  onClick={() => filterMyPosts()}
                  value='my'
                >
                  My
                </button>
                <button
                  className='resume__dropdown-btn'
                  onClick={() => filterAllPosts()}
                  value='all'
                >
                  All
                </button>
              </div>
            )}
          </div>
        </div>
        <div>{showMenu === true ? <p>menu</p> : <span></span>}</div>
        <div className='resume__list'>
          {filterText !== ''
            ? resumes
                .slice(currentPage, currentPage + 10)
                .filter((item) =>
                  item['resumeTitle'].toUpperCase().includes(filterText)
                )
                .filter((item) => item['resumeAuthor'].includes(myPosts))
                .map((resume, i) => {
                  return <Resume key={i} dataResume={resume} />;
                })
            : resumes
                .slice(currentPage, currentPage + 10)
                .filter((item) => item['resumeAuthor'].includes(myPosts))
                .map((resume, i) => {
                  return <Resume key={i} dataResume={resume} />;
                })}
        </div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={resumes.length / 10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default ResumeWork;
