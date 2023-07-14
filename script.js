window.onload = function() {
  // Start the emoji rain
  emojiRain();

  // Handle click events
  document.body.addEventListener('click', displayRandomMessage);
};

var messages = [
  "宝宝最棒！",
  "宝宝最美！",
  "生日快乐!",
  "永远18岁！",
  "永远开心",
  "无忧无虑",
  "美貌与智慧并存！"
];

function displayRandomMessage(event) {
  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  var messageElement = document.createElement('div');
  messageElement.textContent = randomMessage;
  messageElement.className = 'message'; // Assign the message class
  messageElement.style.left = event.clientX + 'px'; // position at click location
  messageElement.style.top = event.clientY + 'px'; // position at click location
  document.body.appendChild(messageElement);

  // Remove the message after the animation ends
  setTimeout(function() {
      document.body.removeChild(messageElement);
  }, 500); // 0.5 second
}


function emojiRain() {
  // Add 10 emojis at a time
  for (var i = 0; i < 10; i++) {
      createEmoji();
  }

  // Create a new emoji every 100ms
  setInterval(createEmoji, 100);
}

function createEmoji() {
  var emojiArray = ['🎂', '🎈', '🎉', '🎁', '🍰', '🧁']; // Add as many emojis as you like
  var randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)]; // Select a random emoji

  var emoji = document.createElement('div');
  emoji.textContent = randomEmoji; // Use the random emoji
  emoji.style.position = 'fixed';
  emoji.style.zIndex = '9999';
  emoji.style.fontSize = Math.random() * 20 + 10 + 'px'; // random size
  emoji.style.top = Math.random() * -200 + 'px'; // random vertical position off the top of the screen
  emoji.style.left = Math.random() * document.body.clientWidth + 'px'; // random horizontal position
  document.body.appendChild(emoji);

  // Make the emoji fall
  fallEmoji(emoji);
}

function fallEmoji(emoji) {
  var speed = Math.random() * 5 + 2; // random speed
  var horizontalSpeed = Math.random() * 2 - 1; // random horizontal direction
  var rotationSpeed = Math.random() * 5 - 2.5; // random rotation direction

  function drop() {
      emoji.style.top = parseInt(emoji.style.top) + speed + 'px';
      emoji.style.left = parseInt(emoji.style.left) + horizontalSpeed + 'px';
      emoji.style.transform = 'rotate(' + rotationSpeed + 'deg)';

      // Remove the emoji when it's off the screen
      if (parseInt(emoji.style.top) > window.innerHeight) {
          document.body.removeChild(emoji);
      } else {
          requestAnimationFrame(drop);
      }
  }

  drop();
}

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

