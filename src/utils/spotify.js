import credentials from '../credentials';

const authorizeUrl = 'https://accounts.spotify.com/authorize';
const apiBaseUrl = 'https://api.spotify.com';
const scope = 'user-read-private user-read-email';


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
