import { FC } from 'react';
import './SearchBar.css';

const SearchBar: FC = () => {
  return (
    <div className='searchbar-container'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search Legalcluster'
        className='searchbar__input'
        onFocus={(e) => (e.target.placeholder = '')}
        onBlur={(e) => (e.target.placeholder = 'Search Legalcluster')}
      />
      <img src='./assets/search.svg' alt='search' />
    </div>
  );
};

export default SearchBar;
