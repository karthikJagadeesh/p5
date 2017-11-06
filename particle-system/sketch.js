const app = p => {
  let global = window;
  let bubbles = [];
  let numberOfBubbles = 20;
  let x, y, r, c, id;

  //utilities
  const checkForEdgeClash = bubble => {
    if (bubble.positionX > p.width || bubble.positionX < 0) {
      bubble.speedX = bubble.speedX * -1;
    } else if (bubble.positionY > p.height || bubble.positionY < 0) {
      bubble.speedY = bubble.speedY * -1;
    }
  };

  const distanceBetweenTwoPoints = (bubbleA, bubbleB) =>
    p.dist(
      bubbleA.positionX,
      bubbleA.positionY,
      bubbleB.positionX,
      bubbleB.positionY
    );

  const checkForCollision = bubble => {
    bubbles.forEach(bubbleFromAllList => {
      const distance = distanceBetweenTwoPoints(bubbleFromAllList, bubble);
      if (
        distance < bubbleFromAllList.radius / 2 + bubble.radius / 2 &&
        bubbleFromAllList.id !== bubble.id
      ) {
        bubble.color = [p.random(255), p.random(255), p.random(255)];
        bubble.radius = p.random(15, 25);
      }
    });
  };

  class Bubble {
    constructor(positionX, positionY, radius, color, id) {
      this.positionX = positionX;
      this.positionY = positionY;
      this.radius = radius * 2;
      this.color = color;
      this.speedX = p.random(-6, 5);
      this.speedY = p.random(-5, 6);
      this.id = id;
    }

    show() {
      p.noStroke();
      p.fill(...this.color);
      p.ellipse(this.positionX, this.positionY, this.radius);
    }

    move() {
      this.positionX = this.positionX + this.speedX;
      this.positionY = this.positionY + this.speedY;
    }
  }

  // instantiation - runs for the first time
  p.setup = () => {
    p.createCanvas(global.innerWidth - 100, global.innerHeight - 100);
    p.smooth();
    p.background(255);

    for (let i = 0; i < numberOfBubbles; i++) {
      x = p.random(p.width);
      y = p.random(p.height);
      r = p.random(15, 25);
      c = [p.random(255), p.random(255), p.random(255)];
      id = i;
      bubbles.push(new Bubble(x, y, r, c, id));
    }
  }

  // Draw loop - runs for every frame
  // print 'frameRate' to check for the current frame
  p.draw = () => {
    bubbles.forEach(bubble => {
      checkForEdgeClash(bubble);
      checkForCollision(bubble);
      bubble.show();
      bubble.move();
    });
  }

  p.windowResized = () => {
    p.resizeCanvas(global.innerWidth - 100, global.innerHeight - 100);
  }
};

let appInstance = new p5(app);