/* eslint-disable */ 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  background(180, 122, 234)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  ellipse(mouseX, mouseY, 130, 130)
  fill(97, 226, 148)
  stroke(97, 226, 148)
}