const clientID = '953647d5e1f7457eb4ce7a6cbdf935a8';
const redirectURI = 'http://locolhost:3000';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    };

    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      // setting access token and expiry time variables.
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      // setting the function which will reset the access token when it expires.
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);

      // clearing the URL after the access token expires.
      window.history.pushState('Access token', null, '/');

      return accessToken;
    };

    // third check for the access token if the first and second checks are both false.
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    window.location = redirect;
  }
};

export {Spotify};