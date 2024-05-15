import React, { useState } from 'react';
import styles from './App.module.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import Tracklist from './components/Tracklist';

function App () {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: 'Track-name 1',
      artist: 'Track-name 1 artist',
      album: 'Track-name 1 album'
    },
    {
      id: 2,
      name: 'Track-name 2',
      artist: 'Track-name 2 artist',
      album: 'Track-name 2 album'
    }
  ]);

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        
        <div className={styles['App-playlist']}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults}/>

          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
};

export default App;