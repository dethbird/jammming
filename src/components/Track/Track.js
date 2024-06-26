import React from 'react';

function Track({
    track,
    handleAddTrack = undefined,
    handleRemoveTrack = undefined
}) {
    return (
        <div>
            {track.name} |
            {track.artists[0].name} |
            {track.album.name}
            {handleAddTrack ? <button onClick={() => handleAddTrack(track.uri)}>+</button> : null}
            {handleRemoveTrack ? <button onClick={() => handleRemoveTrack(track.uri)}>-</button> : null}
        </div>
    );
}

export default Track;
