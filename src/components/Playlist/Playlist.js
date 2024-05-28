import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks, handleRemoveTrack }) {
    return (
        <>
            <h3>{ name }</h3>
            <Tracklist tracks = { tracks } handleRemoveTrack={ handleRemoveTrack } />
        </>
    );
}

export default Playlist;
