function app(p) {
  let global = window;
  let brush = {};
  let redDotInPainter = document.querySelector("#red-dot-painter");

  class Brush {
    constructor() {
      this.type = "brush";
      this.size = 2;
      this.color = "#851934";
      this.cacheColor = this.color;
    }

    doBrushStroke() {
      p.noFill();
      p.stroke(this.color);
      p.strokeWeight(this.size);
      p.curve(
        p.pmouseX,
        p.pmouseY,
        p.pmouseX,
        p.pmouseY,
        p.mouseX,
        p.mouseY,
        p.mouseX,
        p.mouseY
      );
    }

    changeBrushSize(event) {
      const size = event.target.value;
      switch (size) {
        case "2":
          this.size = 2;
          break;
        case "4":
          this.size = 6;
          break;
        case "6":
          this.size = 10;
          break;
        case "8":
          this.size = 20;
          break;
        case "10":
          this.size = 40;
          break;
      }
    }

    changeBrushType(event) {
      this.type = event.target.dataset.value;
      if (this.type === "eraser") {
        this.color = settings.canvasBackColor;
      } else if (this.type === "brush") {
        this.color = this.cacheColor;
      }
    }

    changeBrushColor(event) {
      const color = event.target.dataset.value;
      switch (color) {
        case "red":
          this.color = "#851934";
          break;
        case "green":
          this.color = "#1F8A70";
          break;
        case "yellow":
          this.color = "#FFE11A";
          break;
        case "blue":
          this.color = "#165873";
          break;
        default:
          this.color = event.target.value;
      }
      this.cacheColor = redDotInPainter.style.background = this.color;
    }
  }

  const settings = {
    canvasBackColor: "#fff",
    redDotInPainterColor: brush.color,
    onClearClick: () => {
      clearCanvas();
    },
    onScreenSizeToggle: event => {
      const isFullScreen = event.target.checked;
      p.fullscreen(isFullScreen);
    }
  };

  //utilities
  const clearCanvas = () => {
    p.background(settings.canvasBackColor);
  };

  // p5 setup - runs for the first time
  p.setup = () => {
    brush = new Brush();
    p.createCanvas(global.innerWidth - 100, global.innerHeight - 100);
    clearCanvas();
    p.smooth();
    redDotInPainter.style.background = settings.redDotInPainterColor;
  };

  // Draw loop - runs for every frame
  // print 'frameRate' to check for the current frame
  p.draw = () => {};

  // User Interactive events
  p.mousePressed = () => {
    brush.doBrushStroke();
  };

  p.mouseDragged = () => {
    brush.doBrushStroke();
  };

  p.windowResized = () => {
    p.resizeCanvas(global.innerWidth - 100, global.innerHeight - 100);
  };

  let quickPalette = ["#red", "#green", "#yellow", "#blue"];

  quickPalette.forEach(color => {
    document.querySelector(color).onclick = event =>
      brush.changeBrushColor(event);
  });

  document.querySelector("#color-picker").oninput = event =>
    brush.changeBrushColor(event);
  document.querySelector("#brush-size").onchange = event =>
    brush.changeBrushSize(event);
  document.querySelector("#clear-canvas").onclick = settings.onClearClick;
  document.querySelector("#toggle-screen").onclick = settings.onScreenSizeToggle;

  document.querySelector("#brush").onclick = event => {
    document.body.style.cursor =
      "url(http://cur.cursors-4u.net/user/use-1/use151.cur), default";
    brush.changeBrushType(event);
  };
  document.querySelector("#eraser").onclick = event => {
    document.body.style.cursor =
      "url(./images/eraser-cursor-icon.png), default";
    brush.changeBrushType(event);
  };
}

var appInstance = new p5(app);
