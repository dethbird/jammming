import { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { authRequest, searchTracks } from '../../utils/spotify';




function App() {

  // localStorage.clear();

  let accessToken = localStorage.getItem('accessToken');

  if(window.location.hash) {
    const parts = window.location.hash.slice(1).split('&');
    parts.forEach(part => {
      const pair = part.split('=');
      if (pair[0] === 'access_token') {
        localStorage.setItem('accessToken', pair[1]);
      }
      if (pair[0] === 'expires_in') {
        localStorage.setItem('expiresIn', pair[1]);
      }
    });
    window.location.hash='';
  }

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
  const dummyPlaylistName = 'Super Cool Songs';

  const [tracks, setTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
  const handleRemoveTrack = (trackId) => {
    const newTracks = tracks.filter(track => {
      return track.id !== trackId
    });
    setTracks(() => newTracks);
  };

  const handlePlaylistNameChange = (e) => {
    setPlaylistName(() => e.target.value );
  }

  const savePlaylist = () => {
    const ids = tracks.map(track => {
      return track.id
    });
    console.log(playlistName, ids);
  }
  const loginToSpotify = () => {
    authRequest();
  }
  const handleUpdateSearchTerm = (e) => {
    setSearchTerm(() => e.target.value );
  }

  const handleClickSearch = async () => {
    const tracks = await searchTracks(searchTerm, accessToken);
    setSearchResults(() => Object.values(tracks));
  }

  if (!accessToken) {
    return <button onClick={loginToSpotify}>Login to Spotify</button>
  } else {
    return (
      <div className="App">
        <button onClick={savePlaylist}>Save my playlist</button>
        <h2>My Playlist</h2>
        <Playlist name={playlistName} tracks={tracks} handleRemoveTrack={handleRemoveTrack} handlePlaylistNameChange={handlePlaylistNameChange}/>
        <h2>Track Search</h2>
        <SearchBar term={searchTerm} handleUpdateSearchTerm={ handleUpdateSearchTerm} handleClickSearch={handleClickSearch}/>
        <SearchResults tracks={searchResults} handleAddTrack={handleAddTrack} />
      </div>
    );
  }
}

export default App;
