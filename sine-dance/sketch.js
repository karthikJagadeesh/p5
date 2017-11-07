let balls = [];

class Ball {
  constructor(posX, posY, radius, offsetX) {
    this.posX = posX;
    this.posY = posY;
    this.diameter = radius * 2;
    this.speedY = 0.1;
    this.speedX = 0;
    this.offsetX = offsetX;
  }

  show() {
    let color = [random(255), random(255), random(255)]
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
  let canvas = createCanvas(innerWidth - 50, innerHeight - 50);
  let noOfBalls = 40;
  let totalOffset = height / noOfBalls;
  for (let i = 0; i < noOfBalls; i++) {
    let offsetX = (i + 1) / 250;
    let posYOffset = totalOffset * (i + 0.5);
    balls.push(new Ball(width / 2, posYOffset, 5, offsetX));
  }
}

function draw() {
  background(0);
  balls.forEach(ball => {
    ball.show();
    ball.move();
  });
}
