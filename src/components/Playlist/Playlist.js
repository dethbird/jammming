import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks, handleRemoveTrack, handlePlaylistNameChange }) {
    return (
        <>
            <input type="text" value={name} onChange={handlePlaylistNameChange} />
            <Tracklist tracks = { tracks } handleRemoveTrack={ handleRemoveTrack } />
        </>
    );
}

export default Playlist;
