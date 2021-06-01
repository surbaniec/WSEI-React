import { FC, useState } from 'react';
import './SearchBar.css';

interface IProps {
  cssClass: string;
}

const SearchBar: FC<IProps> = ({ cssClass }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // hide & display search icon and placeholder depending on focus state
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
    setIsClicked(true);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = 'Search Legalcluster';
    setIsClicked(false);
  };

  return (
    <div className='searchbar-container'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search Legalcluster'
        className={cssClass}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
      />
      {!isClicked && (
        <img
          className='searchbar__icon'
          src='./assets/search.svg'
          alt='search'
        />
      )}
    </div>
  );
};

export default SearchBar;
