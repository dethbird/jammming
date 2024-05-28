import { useState } from 'react';
import './App.css';

import Tracklist from '../Tracklist/Tracklist';


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
      <Tracklist tracks={ tracks } />
    </div>
  );
}

export default App;
