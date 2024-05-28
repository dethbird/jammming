import React from 'react';

import Track from '../Track/Track';

function Tracklist({tracks, handleAddTrack=undefined, handleRemoveTrack=undefined}) {
    const trackNodes = tracks.map(track => {
        return <Track track={track} key={track.id} handleAddTrack={handleAddTrack} handleRemoveTrack={handleRemoveTrack}/>
    });
    return <div>{trackNodes}</div>;
}

export default Tracklist;
