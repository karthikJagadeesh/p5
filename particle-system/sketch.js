let global = window;
let bubbles = [];
let numberOfBubbles = 100;
let x, y, r, c;

class Bubble {
  constructor(positionX, positionY, radius, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.color = color;
  }

  show() {
    noStroke();
    fill(...this.color);
    ellipse(this.positionX, this.positionY, this.radius);
  }

  move() {
    this.positionX = this.positionX + random(-2, 2);
    this.positionY = this.positionY + random(-2, 2);
  }
}

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 100);
  smooth();

  for (let i = 0; i < numberOfBubbles; i++) {
    x = random(width);
    y = random(height);
    r = random(45, 55);
    c = [171, 171, 171, random(255)];
    bubbles.push(new Bubble(x, y, r, c));
  }
}

// Draw loop - runs for every frame
// print 'frameRate' to check for the current frame
function draw() {
  background(0);
  bubbles.forEach(bubble => {
    bubble.show();
    bubble.move();
  })
}

function windowResized() {
  resizeCanvas(global.innerWidth - 100, global.innerHeight - 100);
}
