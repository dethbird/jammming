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
            {handleAddTrack ? <button onClick={() => handleAddTrack(track.id)}>+</button> : null}
            {handleRemoveTrack ? <button onClick={() => handleRemoveTrack(track.id)}>-</button> : null}
        </div>
    );
}

export default Track;
