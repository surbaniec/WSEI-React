import React, { FC, useState } from 'react';
import './Entities.css';
import useDropdown from 'react-dropdown-hook';
import Entity from '../layout/Entity/Entity';
import { EntitiesData } from '../../data/EntitiesData';
import Popup from '../layout/Popup/Popup';
import Filters from '../layout/Filters/Filters';

interface IProps {
  photos: object;
}

const Entities: FC<IProps> = ({ photos }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');
  const [sort, setSort] = useState<boolean>(false);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
    setIsClicked(true);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = 'Filter by title...';
    setIsClicked(false);
  };

  const handleClick = (): void => {
    toggleDropdown();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value.toUpperCase());
  };

  const handleMosaic = () => {
    const entitiesWrapper = document.querySelector('.entities__wrapper');
    entitiesWrapper?.classList.remove('list');
    entitiesWrapper?.classList.add('mosaic');
  };

  const handleList = () => {
    const entitiesWrapper = document.querySelector('.entities__wrapper');
    entitiesWrapper?.classList.remove('mosaic');
    entitiesWrapper?.classList.add('list');
  };

  const handleResize = () => {
    const entitiesContainer = document.querySelector('.entities-container');
    const sidebarContainer = document.querySelector('.sidebar-container');
    entitiesContainer?.classList.toggle('entities-expanded');
    sidebarContainer?.classList.toggle('sidebar-expanded');
  };

  const showModal = () => {
    const modal = document.querySelector('.modal');
    modal?.classList.add('show');
    setTimeout(() => {
      modal?.classList.remove('show');
    }, 500);
  };

  return (
    <div className='entities-container'>
      <div className='entities__topmenu'>
        <div className='entities__topmenu-left'>
          <h2 className='entities__title'>Entities</h2>
          <img
            className='entities__topmenu-icon'
            src='../../assets/cog.svg'
            alt=''
          />
        </div>
        <div className='entities__topmenu-right'>
          <div
            className='entities__topmenu-option'
            onClick={() => handleMosaic()}
          >
            <img
              className='entities__topmenu-icon-big'
              src='../../assets/mosaic-icon.svg'
              alt=''
            />
            <span>Mosaic</span>
          </div>
          <div
            className='entities__topmenu-option'
            onClick={() => handleList()}
          >
            <img
              className='entities__topmenu-icon-big-2'
              src='../../assets/hamburger-icon.svg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='entities__menu'>
        <div className='entities__menu-left'>
          <div className='entities__menu-option'>
            <span>All</span>
            <img
              className='entities__topmenu-icon'
              src='../../assets/arrow-down.svg'
              alt=''
            />
          </div>
          <div className='entities__menu-option'>
            <img
              className='entities__topmenu-icon'
              src='../../assets/dots.svg'
              alt=''
            />
          </div>
          <div className='entities__menu-option'>
            <img
              className='entities__topmenu-icon'
              src='../../assets/sort.svg'
              alt=''
            />
            <span>Sort</span>
          </div>
          <div
            className='entities__menu-option'
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <img
              className='entities__topmenu-icon'
              src='../../assets/filter.svg'
              alt=''
            />
            <span>Filters</span>
          </div>
          <div className='entities__menu-option' onClick={() => handleResize()}>
            <img
              className='entities__topmenu-icon'
              src='../../assets/resize.svg'
              alt=''
            />
          </div>
          <div
            className='entities__menu-option'
            onClick={() => {
              navigator.clipboard.writeText('localhost:3000/entities');
              showModal();
            }}
          >
            <img
              className='entities__topmenu-icon'
              src='../../assets/share.svg'
              alt=''
            />
            <span>Share</span>
          </div>
        </div>
        <div className='entities__menu-right'>
          <div className='searchbar__container'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search...'
              className='searchbar__input'
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='resume__btn-container' ref={wrapperRef}>
            <button className='resume__btn' onClick={() => handleClick()}>
              <img
                className='entities__topmenu-icon-big'
                src='../../assets/range.svg'
                alt=''
              />
              <span>Followed</span>
              <img src='../../assets/plus.svg' alt='' />
            </button>
            {dropdownOpen && (
              <div className='resume__dropdown'>
                <button className='resume__dropdown-btn' value='my'>
                  My
                </button>
                <button className='resume__dropdown-btn' value='all'>
                  All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='filters__container'>{filtersOpen && <Filters />}</div>
      <div className='entities__wrapper'>
        {filterText !== ''
          ? Object.entries(EntitiesData)
              .filter((entity) =>
                entity[1]['title'].toUpperCase().includes(filterText)
              )
              .map((entity, id) => {
                return (
                  <Entity
                    photoUrl={photos[id]['thumbnailUrl']}
                    title={entity[1]['title']}
                    text={entity[1]['text']}
                  />
                );
              })
          : Object.entries(EntitiesData).map((entity, id) => {
              return (
                <Entity
                  photoUrl={photos[id]['thumbnailUrl']}
                  title={entity[1]['title']}
                  text={entity[1]['text']}
                />
              );
            })}
      </div>
      <div className='modal'>
        <Popup message={'Copied to clipboard!'} />
      </div>
    </div>
  );
};

export default Entities;
