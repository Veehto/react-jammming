import React, { useState } from 'react';
import styles from './App.module.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import Tracklist from './components/Tracklist';
import { Spotify } from './util/Spotify/Spotify';

function App () {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: 'Track-name 1',
      artist: 'Track-artist 1',
      album: 'Track-album 1'
    },
    {
      id: 2,
      name: 'Track-name 2',
      artist: 'Track-artist 2',
      album: 'Track-album 2'
    }
  ]);

  const [playlistName, setPlaylistName] = useState('Example-Playlist name');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 3,
      name: 'Track in Playlist Name 3',
      artist: 'Track-name 3 artist',
      album: 'Track-name 3 album'
    },
    {
      id: 4,
      name: 'Track in Playlist 4',
      artist: 'Track-name 4 artist',
      album: 'Track-name 4 album'
    },
  ]);
  
  // Revision these function later, depends on your time idk:
  const addTrack = (track) => {
    const existingTrack = playlistTracks.find((selected) => selected.id === track.id);
    const newTrack = playlistTracks.concat(track);

    existingTrack ? console.log('Track already exists in your playlist') : setPlaylistTracks(newTrack);
  };

  const removeTrack = (track) => {
    const existingTrack = playlistTracks.filter((selected) => selected.id !== track.id);
    setPlaylistTracks(existingTrack);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((song) => song.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  const search = (term) => {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  };

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar onSearch={search}/>
        
        <div className={styles['App-playlist']}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults 
            userSearchResults={searchResults} 
            onAdd={addTrack}
          />

          {/* <!-- Add a Playlist component --> */}
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;