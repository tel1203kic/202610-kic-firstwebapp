const colors = [
  "#ff5d73",
  "#ffb84d",
  "#f5e85b",
  "#55d6a5",
  "#55b9f5",
  "#b58af5",
];

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");
  noStroke();
  background("#111318");

  document.getElementById("clear-button").addEventListener("click", () => {
    background("#111318");
  });
}

function draw() {
  if (mouseIsPressed) {
    addCircle(mouseX, mouseY);
  }
}

function mousePressed() {
  addCircle(mouseX, mouseY);
}

function addCircle(x, y) {
  // Choose a fresh color and size for each stamp.
  fill(random(colors));
  circle(x, y, random(18, 54));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}