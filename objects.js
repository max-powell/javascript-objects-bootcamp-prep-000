var playlist = {Typhoon: 'Reed Road'}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist
}
