import { artists } from '/data/artists.js';

const urlParams = new URLSearchParams(window.location.search);
const artistId = urlParams.get('id');
const thisArtist = artists.find((artist) => (artist.id = artistId));

document.getElementById('artistName').innerHTML = thisArtist.artistName;
document.getElementById('artistDescription').innerHTML =
  thisArtist.artistDescription;
document.getElementById('artistStrength').innerHTML = thisArtist.artistStrength;
document.getElementById('artistCharisma').innerHTML = thisArtist.artistCharisma;
document.getElementById('artistAlignment').innerHTML =
  thisArtist.artistAlignment;
document.getElementById('artistIntelligence').innerHTML =
  thisArtist.artistIntelligence;
document.getElementById('artistSpecialPowers').innerHTML =
  thisArtist.artistSpecialPowers;
