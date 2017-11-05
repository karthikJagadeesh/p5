let global = window;
let bubbles = [];
let numberOfBubbles = 20;
let x, y, r, c, id;

//utilities
const checkForEdgeClash = bubble => {
  if (bubble.positionX > width || bubble.positionX < 0) {
    bubble.speedX = bubble.speedX * -1;
  } else if (bubble.positionY > height || bubble.positionY < 0) {
    bubble.speedY = bubble.speedY * -1;
  }
};

const distanceBetweenTwoBubbles = (bubbleA, bubbleB) =>
  dist(
    bubbleA.positionX,
    bubbleA.positionY,
    bubbleB.positionX,
    bubbleB.positionY
  );

const checkForCollision = bubble => {
  bubbles.forEach(bubbleFromAllList => {
    const distance = distanceBetweenTwoBubbles(bubbleFromAllList, bubble);
    if (
      distance < bubbleFromAllList.radius / 2 + bubble.radius / 2 &&
      bubbleFromAllList.id !== bubble.id
    ) {
      bubble.color = [random(255), random(255), random(255)];
      bubble.radius = random(15, 25);
    }
  });
};

class Bubble {
  constructor(positionX, positionY, radius, color, id) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius * 2;
    this.color = color;
    this.speedX = random(-6, 5);
    this.speedY = random(-5, 6);
    this.id = id;
  }

  show() {
    noStroke();
    fill(...this.color);
    ellipse(this.positionX, this.positionY, this.radius);
  }

  move() {
    this.positionX = this.positionX + this.speedX;
    this.positionY = this.positionY + this.speedY;
  }
}

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 100);
  smooth();
  background(255);

  for (let i = 0; i < numberOfBubbles; i++) {
    x = random(width);
    y = random(height);
    r = random(15, 25);
    c = [random(255), random(255), random(255)];
    id = i;
    bubbles.push(new Bubble(x, y, r, c, id));
  }
}

// Draw loop - runs for every frame
// print 'frameRate' to check for the current frame
function draw() {
  // background(0);
  bubbles.forEach(bubble => {
    checkForEdgeClash(bubble);
    checkForCollision(bubble);
    bubble.show();
    bubble.move();
  });
}

function windowResized() {
  resizeCanvas(global.innerWidth - 100, global.innerHeight - 100);
}
