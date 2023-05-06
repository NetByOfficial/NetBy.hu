const GAME_LENGTH_SECONDS = 30;

let score = 0;
let timeRemaining = GAME_LENGTH_SECONDS;

const clickMeButton = document.getElementById('click-me');
const currentScore = document.getElementById('current-score');
const timeRemainingSpan = document.getElementById('time-remaining');
const gameBoard = document.getElementById('game-board');
moveButton();
clickMeButton.addEventListener('click', function() {
    
    currentScore.innerText = score;

    moveButton();
    });

    document.addEventListener('click', function(event) {
    if (event.target.id !== 'click-me') {
    return;
    }

    score++;
    currentScore.innerText = score;

    moveButton();
    });

    function moveButton() {
    const buttonWidth = clickMeButton.offsetWidth;
    const buttonHeight = clickMeButton.offsetHeight;
    const boardWidth = gameBoard.offsetWidth;
    const boardHeight = gameBoard.offsetHeight;

    const maxX = boardWidth - buttonWidth;
    const maxY = boardHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    clickMeButton.style.left = `${randomX}px`;
    clickMeButton.style.top = `${randomY}px`;
    }

    function startGame() {
    setInterval(function() {
    timeRemaining--;
    timeRemainingSpan.innerText = timeRemaining;
    if (timeRemaining <= 0) {
      endGame();
    }
  }, 1000);
}

  function endGame() {
  clearInterval(gameInterval);
  clickMeButton.removeEventListener('click', handleClick);
  document.removeEventListener('click', handleClick);
  alert(`Játéknak Vége! Your final score is ${score}.`);
  }
  startGame();

  
