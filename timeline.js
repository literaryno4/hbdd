function toggleMusic() {
  var music = document.getElementById('bgMusic');
  var playButton = document.getElementById('playButton');
  var pauseButton = document.getElementById('pauseButton');

  if (music.paused) {
    music.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
  } else {
    music.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
  }
}