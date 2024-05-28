import React from 'react';

import Track from '../Track/Track';

function Tracklist({tracks}) {
    const trackNodes = tracks.map(track => {
        return <Track track={track} key={track.id} />
    });
    return <div>{trackNodes}</div>;
}

export default Tracklist;
