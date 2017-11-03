let global = window;
let brushSize = 1;
let previousX = 0,
  previousY = 0;
let brushColor = "#851934";

const canvasBackColor = "#fff";

//utilities
const createBrushStroke = () => {
  noFill();
  stroke(brushColor);
  strokeWeight(brushSize);
  curve(
    previousX,
    previousY,
    previousX,
    previousY,
    mouseX,
    mouseY,
    mouseX,
    mouseY
  );
  previousX = mouseX;
  previousY = mouseY;
};

const clearCanvas = () => {
  background(canvasBackColor);
};

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 100);
  clearCanvas();
  smooth();
}

// Draw loop - runs for every frame
// print 'frameRate' to check for the current frame
function draw() {}

// User Interactive events
function mouseDragged() {
  createBrushStroke();
}

function mousePressed() {
  previousX = mouseX;
  previousY = mouseY;
}

function mouseDragged() {
  createBrushStroke();
}

function onClearClick() {
  clearCanvas();
}

function onBrushSizeChange(event) {
  const size = event.target.value;
  switch (size) {
    case "1":
      brushSize = 1;
      break;
    case "2":
      brushSize = 4;
      break;
    case "3":
      brushSize = 8;
      break;
  }
}

function onBrushColorChangeClick(event) {
  const color = event.target.dataset.value;
  switch (color) {
    case "red":
      brushColor = "#851934";
      break;
    case "green":
      brushColor = "#1F8A70";
      break;
    case "yellow":
      brushColor = "#FFE11A";
      break;
    case "blue":
      brushColor = "#165873";
      break;
  }
}

function colorPickerInputChanged(event) {
  const color = event.target.value;
  brushColor = color;
}

function onScreenSizeToggle(event) {
  const isFullScreen = event.target.checked;
  fullscreen(isFullScreen);
}
