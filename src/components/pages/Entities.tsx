import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import './Entities.css';
import useDropdown from 'react-dropdown-hook';
import Entity from '../layout/Entity/Entity';
import { EntitiesData } from '../../data/EntitiesData';

interface IProps {
  photos: object;
}

const Entities: FC<IProps> = ({ photos }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');

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
    console.log(filterText);
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
          <div className='entities__topmenu-option'>
            <img
              className='entities__topmenu-icon-big'
              src='../../assets/mosaic-icon.svg'
              alt=''
            />
            <span>Mosaic</span>
          </div>
          <div className='entities__topmenu-option'>
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
          <div className='entities__menu-option'>
            <img
              className='entities__topmenu-icon'
              src='../../assets/filter.svg'
              alt=''
            />
            <span>Filters</span>
          </div>
          <div className='entities__menu-option'>
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
    </div>
  );
};

export default Entities;
