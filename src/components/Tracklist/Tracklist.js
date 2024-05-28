import React from 'react';

import Track from '../Track/Track';

function Tracklist({tracks, handleAddTrack=undefined}) {
    const trackNodes = tracks.map(track => {
        return <Track track={track} key={track.id} handleAddTrack={handleAddTrack}/>
    });
    return <div>{trackNodes}</div>;
}

export default Tracklist;
