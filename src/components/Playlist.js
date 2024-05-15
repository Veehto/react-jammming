import React from 'react';
import styles from '../styles/Playlist.module.css';

const Playlist = () => {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}

      <button className={styles['Playlist-save']}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;