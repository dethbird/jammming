import credentials from '../credentials';

const authorizeUrl = 'https://accounts.spotify.com/authorize';
const scope = 'user-read-private user-read-email';



let queryParams = ['response_type=token'];
queryParams.push(`client_id=${credentials.clientId}`);
queryParams.push(`scope=${encodeURIComponent(scope)}`);
queryParams.push(`redirect_uri=${encodeURIComponent(credentials.redirectUri)}`);
// queryParams.push(`state=${state}`);

export const authRequest = () => {
    const state = (Math.random() * 1000);
    localStorage.setItem('state', state);
    queryParams.push(`state=${state}`);
    const urlEndpoint = authorizeUrl + '?' + queryParams.join('&');
    document.location = urlEndpoint;
}
