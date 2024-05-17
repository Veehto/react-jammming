import React from 'react';
import styles from '../styles/Playlist.module.css';
import Tracklist from './Tracklist';

const Playlist = (props) => {
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
        userSearchResults={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={true}
      />

      <button className={styles['Playlist-save']} onClick={props.onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;