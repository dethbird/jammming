import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks }) {
    return (
        <>
            <div>{ name }</div>
            <Tracklist tracks = { tracks } />
        </>
    );
}

export default Playlist;
