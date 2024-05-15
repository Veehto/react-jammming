import React from 'react';
import styles from '../styles/SearchResults.module.css';
import Tracklist from './Tracklist';

const SearchResults = (props) => {
  return (
    <div className={styles.SearchResults}>
      {/* <!-- Add a Tracklist component --> */}
      <Tracklist userSearchResults={props.userSearchResults}/>
    </div>
  );
};

export default SearchResults;