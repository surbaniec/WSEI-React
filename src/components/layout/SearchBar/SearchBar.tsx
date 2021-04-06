import { FC } from 'react';
import './SearchBar.css';

const SearchBar: FC = () => {
  return (
    <div className='input-container'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search Legalcluster'
        className='search-input'
      />
      <img src='./assets/search.svg' alt='search' />
    </div>
  );
};

export default SearchBar;
