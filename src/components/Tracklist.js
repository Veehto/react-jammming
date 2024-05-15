import React from "react";
import styles from '../styles/Tracklist.module.css';
import Track from "./Track";

const Tracklist = (props) => {
  return (
    <div className={styles.TrackList}>
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      {props.userSearchResults.map((track) => (
        <Track
        track={track}
        trackId={track.id}
         />
      ))}
    </div>
  );
};

export default Tracklist;