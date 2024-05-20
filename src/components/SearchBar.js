import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const passTerm = () => {
    props.onSearch(term);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className={styles.SearchBar}>
      <input placeholder="Enter a Song, Album, or Artist" onChange={handleTermChange}/>

      <button className={styles.SearchButton} onClick={passTerm}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;