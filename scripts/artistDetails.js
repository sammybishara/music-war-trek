document.getElementById('artistName').innerHTML = artistInfo.artistName;
document.getElementsByClassName('nav-link')[0] = 'What is this?';
document.querySelector('#artistDescription').innerHTML =
  artistInfo.artistDescription;
document.querySelectorAll('.nav-link')[0].style.color = 'yellow';
document.getElementsByTagName('p')[0] = 'Welcome!';
