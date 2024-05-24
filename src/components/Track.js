import React from 'react';
import styles from '../styles/Track.module.css';

const Track = (props) => {
  const renderActionButton = () => {
    if (props.isRemoval) {
      return <button className={styles['Track-action']} onClick={passTrackToRemove}>-</button>
    } else {
      return <button className={styles['Track-action']} onClick={passTrack}>+</button>
    }
  };

  const passTrack = () => {
    props.onAdd(props.track);
  };

  const passTrackToRemove = () => {
    props.onRemove(props.track);
  };

  return (
    <div className={styles.Track}>
      <img src={props.track.imageUri} style={{height: 64, width: 64}} alt='Track album cover' />
      <div className={styles['Track-information']}>
        <div>
            {/* <h3><!-- track name will go here --></h3> */}
            <h3>{props.track.name}</h3>
            {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
      </div>
      
      {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      {renderActionButton()}
    </div>
  );
};

export default Track;