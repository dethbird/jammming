import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks, handleRemoveTrack, handlePlaylistNameChange, handleSavePlaylist }) {
    return (
        <>
            <input type="text" value={name} onChange={handlePlaylistNameChange} />
            <button onClick={handleSavePlaylist} disabled={!name || name.length < 2 || !tracks.length }>Save my playlist</button>
            <Tracklist tracks = { tracks } handleRemoveTrack={ handleRemoveTrack } />
        </>
    );
}

export default Playlist;
