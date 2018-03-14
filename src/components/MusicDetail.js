import React from 'react';

const MusicDetail = (props) => {
  return(
    <div className="music-details">
      <h4>Chart Position: {props.chartPosition}</h4>
      <p>{props.artist}</p>
    </div>
  )
}

export default MusicDetail;
