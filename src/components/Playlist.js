import React from 'react';
import styles from '../styles/Playlist.module.css';
import Tracklist from './Tracklist';

const Playlist = (props) => {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
        userSearchResults={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={true}
      />

      <button className={styles['Playlist-save']}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;