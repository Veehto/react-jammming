import React from 'react';
import styles from '../styles/SearchResults.module.css';
import Tracklist from './Tracklist';

const SearchResults = (props) => {
  return (
    <div className={styles.SearchResults}>
      {/* <!-- Add a Tracklist component --> */}
      <Tracklist
        userSearchResults={props.userSearchResults} 
        isRemoval={false} 
        onAdd={props.onAdd}
      />
    </div>
  );
};

export default SearchResults;