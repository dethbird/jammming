import React from 'react';

function Track({track, handleAddTrack=undefined}) {
    return <div>{ track.name } | { track.artist } | {track.album } { handleAddTrack ? <button onClick={() => handleAddTrack(track.id) }>add</button> : null }</div>;
}

export default Track;
