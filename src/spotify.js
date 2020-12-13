export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://react-ezu3av.stackblitz.io/";
const clientId = "e298babc4f434f24bd4c4a969a3e269d";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
