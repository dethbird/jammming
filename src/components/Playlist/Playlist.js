import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks }) {
    return (
        <>
            <h3>{ name }</h3>
            <Tracklist tracks = { tracks } />
        </>
    );
}

export default Playlist;
