import { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


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
  const dummyTrackSearch = [
    {
      id: 4, name: 'askdjfbaskdjnjdsf', artist: 'OOOskdjfnskdfb', album: 'uuuadsiahsbdb'
    },
    {
      id: 5, name: 'zzzzzbkjbkjhsdbf', artist: 'gfsfgse', album: 'bbbbbbbb'
    }
  ];

  const [tracks, setTracks] = useState(dummyTracks);
  const [searchResults, setSearchResults] = useState(dummyTrackSearch);

  const handleAddTrack = (trackId) => {
    const selectedTrack = searchResults.find(track => {
      return track.id === trackId
    });
    if (selectedTrack) {
      if (!tracks.find(track => {
        return track.id === trackId
      })) {
        setTracks((prev) => [...prev, selectedTrack]);
      }
    }
  };

  return (
    <div className="App">
      <h2>My Playlist</h2>
      <Playlist name='Super Cool Songs' tracks={tracks} />
      <h2>Track Search Results</h2>
      <SearchResults tracks={searchResults} handleAddTrack={handleAddTrack} />
    </div>
  );
}

export default App;
