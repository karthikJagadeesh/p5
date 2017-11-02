function onBodyLoad() {
  document.querySelector('#toolbar').remove();
}

let global = window;

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 50);
  background("#fff");
}

// Draw loop - runs for every frame
function draw() {}

// User Interactive events
function mouseDragged() {
  noStroke();
  fill("red");
  ellipse(mouseX, mouseY, 10, 10);
}

function mouseClicked() {
  noStroke();
  fill("red");
  ellipse(mouseX, mouseY, 10, 10);
}

function onClearClick() {
  background("#fff");
}
