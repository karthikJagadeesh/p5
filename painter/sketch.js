let global = window;
let brushSize = 1;
let previousX = 0,
  previousY = 0;
let brushColor = "#851934";
let currentPaintColor = brushColor;

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
    case "2":
      brushSize = 2;
      break;
    case "4":
      brushSize = 6;
      break;
    case "6":
      brushSize = 10;
      break;
    case "8":
      brushSize = 20;
      break;
    case "10":
      brushSize = 40;
      break;
  }
}

function onBrushColorChangeClick(event) {
  const color = event.target.dataset.value;
  switch (color) {
    case "red":
      currentPaintColor = brushColor = "#851934";
      break;
    case "green":
      currentPaintColor = brushColor = "#1F8A70";
      break;
    case "yellow":
      currentPaintColor = brushColor = "#FFE11A";
      break;
    case "blue":
      currentPaintColor = brushColor = "#165873";
      break;
  }
}

function colorPickerInputChanged(event) {
  const color = event.target.value;
  currentPaintColor = brushColor = color;
}

function onScreenSizeToggle(event) {
  const isFullScreen = event.target.checked;
  fullscreen(isFullScreen);
}

function chooseBrushType(event) {
  const brushType = event.target.dataset.value;
  if (brushType === "eraser") {
    brushColor = canvasBackColor;
  }
  else if (brushType === "brush") {
    brushColor = currentPaintColor;
  }
}