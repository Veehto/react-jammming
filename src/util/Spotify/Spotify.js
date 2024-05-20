const clientID = '953647d5e1f7457eb4ce7a6cbdf935a8';
const redirectURI = 'http://localhost:3000';
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
    } else {
      // third check for the access token if the first and second checks are both false.
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = redirect;
    };
  },
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
  savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const header = {Authorization: `Bearer ${accessToken}`};
    let userID;

    return fetch(`https://api.spotify.com/v1/me`, {headers: header}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userID = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: header,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
          headers: header,
          method: 'POST',
          body: JSON.stringify({uris: trackURIs}),
        });
      });
    });
  }
};

export {Spotify};