import credentials from '../credentials';

const authorizeUrl = 'https://accounts.spotify.com/authorize';
const apiBaseUrl = 'https://api.spotify.com';
const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';


let queryParams = ['response_type=token'];
queryParams.push(`client_id=${credentials.clientId}`);
queryParams.push(`scope=${encodeURIComponent(scope)}`);
queryParams.push(`redirect_uri=${encodeURIComponent(credentials.redirectUri)}`);

export const authRequest = () => {
    const state = (Math.random() * 1000);
    localStorage.setItem('state', state);
    queryParams.push(`state=${state}`);
    const urlEndpoint = authorizeUrl + '?' + queryParams.join('&');
    document.location = urlEndpoint;
}

export const searchTracks = async (term, accessToken) => {
    const searchEndpoint = '/v1/search';
    let queryParts = [`q=${encodeURIComponent(term)}`];
    queryParts.push(`type=track`);
    queryParts.push(`limit=25`);
    const endpoint = `${apiBaseUrl}${searchEndpoint}?${queryParts.join('&')}`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    try {
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.tracks.items;
        }
    } catch (e) {
        console.log(e)
    }
}

export const savePlaylist = async (name, uris, accessToken) => {
    fetch(`${apiBaseUrl}/v1/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('error fetching /me');
        }
        return response.json();
    }).then(userData => {
        return fetch(`${apiBaseUrl}/v1/users/${userData.id}/playlists`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                name,
                description: 'A new playlist called ' + name
            })
        })
    }).then(response => {
        if(!response.ok) {
            throw new Error ('error creating playlist');
        }
        return response.json();
    }).then(playlist => {
        return fetch(`${apiBaseUrl}/v1/playlists/${playlist.id}/tracks`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                uris
            })
        })
    }).then(response => {
        if(!response.ok) {
            throw new Error ('error adding tracks');
        }
        return response.json();
    }).then(playlist => {
        console.log(playlist);
    }).catch(error => {
        // Handle any errors from any request here
        console.error('Failed to fetch data:', error);
    });
}
