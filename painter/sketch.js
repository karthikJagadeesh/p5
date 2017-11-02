let global = window;
let brushWidth = 5,
  brushHeight = 5;

const canvasBackColor = "#fff";

//utilities
const createBrushStroke = () => {
  noStroke();
  fill("red");
  ellipse(mouseX, mouseY, brushWidth, brushHeight);
};

const clearCanvas = () => {
  background(canvasBackColor);
};

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 50);
  clearCanvas();
}

// Draw loop - runs for every frame
// print 'frameRate' to check for the current frame
function draw() {}

// User Interactive events
function mouseDragged() {
  createBrushStroke();
}

function mouseClicked() {
  createBrushStroke();
}

function onClearClick() {
  clearCanvas();
}

function onBrushSizeChange(event) {
  const size = event.target.value;
  switch (size) {
    case "1":
      (brushWidth = 5), (brushHeight = 5);
      break;
    case "2":
      (brushWidth = 15), (brushHeight = 15);
      break;
    case "3":
      (brushWidth = 30), (brushHeight = 30);
      break;
  }
}
