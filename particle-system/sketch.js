let global = window;

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 100);
  smooth();
}

// Draw loop - runs for every frame
// print 'frameRate' to check for the current frame
function draw() {}

function windowResized() {
  resizeCanvas(global.innerWidth - 100, global.innerHeight - 100);
}