import React from 'react';
import MusicDetail from '../components/MusicDetail';

const MusicList = (props) => {

  const musicItems = props.music.map((musicItem, index) => {
    return (
      <MusicDetail key={index} artist={musicItem.title['label']} chartPosition={index+1}/>
    );
  });

  return(
    <div className="music-list">
      {musicItems}
    </div>
  )
}

export default MusicList;
