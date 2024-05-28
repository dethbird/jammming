import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ tracks, handleAddTrack }) {
    return (
        <>
            <Tracklist tracks={tracks} handleAddTrack={handleAddTrack} />
        </>
    );
}

export default SearchResults;

