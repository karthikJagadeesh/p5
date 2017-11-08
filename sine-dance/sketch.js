let balls = [];

class Ball {
  constructor(posX, posY, radius, offsetX, i) {
    this.posX = posX;
    this.posY = posY;
    this.diameter = radius * 2;
    this.speedY = 0.1;
    this.speedX = 0;
    this.offsetX = offsetX;
    this.i = i;
  }

  set speed(speed) {
    this.offsetX = (this.i + 1) / speed;
  }

  show() {
    let color = [random(255), random(255), random(255)];
    noStroke();
    fill(color);
    ellipse(this.posX, this.posY, this.diameter);
  }

  move() {
    this.speedX += this.offsetX;
    this.posX = map(
      sin(this.speedX),
      sin(-1),
      sin(1),
      width * 0.3,
      width * 0.7
    );
  }
}

function setup() {
  let canvas = createCanvas(innerWidth - 50, innerHeight - 100);
  let noOfBalls = 40;
  let totalOffset = height / noOfBalls;
  for (let i = 0; i < noOfBalls; i++) {
    let offsetX = (i + 1) / 1000;
    let posYOffset = totalOffset * (i + 0.5);
    balls.push(new Ball(width / 2, posYOffset, 5, offsetX, i));
  }
}

function draw() {
  background(0);
  balls.forEach(ball => {
    ball.show();
    ball.move();
  });
}

const changeBallSize = event => {
  const value = event.target.value;
  switch (value) {
    case "1":
      balls.forEach(ball => {
        ball.speed = 1000;
      });
      break;
    case "2":
      balls.forEach(ball => {
        ball.speed = 900;
      });
      break;
    case "3":
      balls.forEach(ball => {
        ball.speed = 800;
      });
      break;
    case "4":
      balls.forEach(ball => {
        ball.speed = 700;
      });
      break;
    case "5":
      balls.forEach(ball => {
        ball.speed = 600;
      });
      break;
    case "6":
      balls.forEach(ball => {
        ball.speed = 500;
      });
      break;
    case "7":
      balls.forEach(ball => {
        ball.speed = 400;
      });
      break;
    case "8":
      balls.forEach(ball => {
        ball.speed = 300;
      });
      break;
    case "9":
      balls.forEach(ball => {
        ball.speed = 200;
      });
      break;
    case "10":
      balls.forEach(ball => {
        ball.speed = 100;
      });
      break;
  }
};

//User Events
document
  .querySelector("#speed-slider")
  .addEventListener("input", changeBallSize);
