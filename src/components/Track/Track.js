import React from 'react';

function Track({
    track,
    handleAddTrack = undefined,
    handleRemoveTrack = undefined
}) {
    return (
        <div>
            {track.name} |
            {track.artist} |
            {track.album}
            {handleAddTrack ? <button onClick={() => handleAddTrack(track.id)}>+</button> : null}
            {handleRemoveTrack ? <button onClick={() => handleRemoveTrack(track.id)}>-</button> : null}
        </div>
    );
}

export default Track;
