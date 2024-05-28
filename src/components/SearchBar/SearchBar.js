import React from 'react';

function SearchBar({ term, handleUpdateSearchTerm, handleClickSearch }) {
    return (
        <>
            <input type="text" value={term} onChange={handleUpdateSearchTerm} />
            <button onClick={handleClickSearch} disabled={!term || term.length < 2}>search tracks</button>
        </>
    );
}

export default SearchBar;
