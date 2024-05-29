const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let plr;
let obstacles = [];
let score = 0;
let gameIsRunning = false;

class Player {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dy = 0;
    }
}

function startGame() {
    document.getElementById("start-btn").style.display = "none";
    obstacles = [];
    score = 0;
    plr = new Player(10, 120, 30, 30);
    gameIsRunning = true;
    document.getElementById("canvas").style.display = "block";
    document.getElementById("score-display").style.display = "block";
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    if (gameIsRunning) {
        updateGame();
        drawGame();
        requestAnimationFrame(gameLoop);
    }
}

function updateGame() {
    updatePlayer();
    updateObstacles();
    checkCollisions();
    updateScore();
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacles();
}

function drawObstacles() {
    ctx.fillStyle = "green";
    for (let obs of obstacles) {
        ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
    }
}

function updateObstacles() {
    for (let obs of obstacles) {
        obs.x -= 5;
    }
    if (obstacles.length > 0 && obstacles[0].x + obstacles[0].w < 0) {
        obstacles.shift();
    }
    if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < canvas.width - 200) {
        obstacles.push({
            x: canvas.width,
            y: Math.floor(Math.random() * (canvas.height - 200)) + 100,
            w: 20,
            h: 100
        });
    }
}

function checkCollisions() {
  for (let obs of obstacles) {
    if (plr.x < obs.x + obs.w && plr.x + plr.w > obs.x && plr.y < obs.y + obs.h && plr.y + plr.h > obs.y) {
      gameIsRunning = false;
      alert("Game over! Your score is " + score);
      break;
    }
  }
}

function updateScore() {
  for (let obs of obstacles) {
    if (obs.x + obs.w < plr.x && !obs.scored) {
      obs.scored = true;
      score++;
    }
  }
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

function gameLoop() {
  // Update the game area
  gameArea.clear();
  plr.dy = 0;
  if (gameArea.keys && gameArea.keys[37]) {plr.speedX = -5; }
  if (gameArea.keys && gameArea.keys[39]) {plr.speedX = 5; }
  if (gameArea.keys && gameArea.keys[38]) {plr.speedY = -5; }
  if (gameArea.keys && gameArea.keys[40]) {plr.speedY = 5; }
  plr.newPos();
  plr.update();

  // Update the obstacles
  for (var i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }

  // Check for collisions
  for (var i = 0; i < myObstacles.length; i++) {
    if (plr.crashWith(myObstacles[i])) {
      return;
    }
  }

  // Update the score
  myScore.text="SCORE: " + gameArea.frameNo;
  myScore.update();

  // Increase the frame count
  gameArea.frameNo += 1;

  // Request the next animation frame
  requestAnimationFrame(gameLoop);
}

