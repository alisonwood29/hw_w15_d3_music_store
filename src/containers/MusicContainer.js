import React from 'react';
import MusicList from '../components/MusicList';


class MusicContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      music: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const musicObjects = JSON.parse(jsonString);
      this.setState({music: musicObjects.feed.entry});
    })

    request.send();
  }

  render(){
    return (
      <div>

        <MusicList music={this.state.music}/>
      </div>
    )
  }
}

export default MusicContainer;
