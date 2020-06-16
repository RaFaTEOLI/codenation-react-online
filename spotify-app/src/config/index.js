export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'eb35787480544e27bb867f6b9686b0b9',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: ['user-read-email', 'user-read-private', 'streaming'],
  },
};
