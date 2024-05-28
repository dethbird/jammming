import { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';


function App() {

  // temp
  const dummyTracks = [
    {
      id: 1, name: 'Pizza Party', artist: 'Whatever', album: 'Who cares'
    },
    {
      id: 2, name: 'Music is cool', artist: 'BingBong', album: 'Music5000'
    }
  ];

  const [ tracks, setTracks ] = useState(dummyTracks);

  return (
    <div className="App">
      <Playlist name='Super Cool Songs' tracks={ tracks } />
    </div>
  );
}

export default App;
