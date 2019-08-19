const point_width = 5;
const SCALE = 500;

const f1P = 0.33;
const f2P = 0.66;
const f3P = 0.99;

let x_half;
let y_half;

let X;
let Y;

function getRandomInt(min, max) {
  return Math.floor(Math.floor(Math.random() * (max - min)) + min);
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  x_half = (windowWidth) / 2;
  y_half = (windowHeight) / 2;
  translate(x_half, y_half);

  background(227, 227, 227);

  drawPoint(0, 0);

  X = getRandomInt(-x_half, x_half);
  Y = getRandomInt(-y_half, y_half);
}

function draw() {
  translate(x_half, y_half);
	[X, Y] = chooseF(X, Y);
  drawPoint(X, Y);
}

function drawPoint(x, y) {
  circle(x * SCALE, y * SCALE, point_width);
}

const chooseF = (x, y) => {
  const r = Math.random();
  if (r < f1P) {
    return f1(x, y);
  }
  if (r < f2P) {
    return f2(x, y);
  }

  return f3(x, y);
};

const f1 = (x, y) => [x / 2, y / 2];

const f2 = (x, y) => [x / 2 + 0.5, y / 2];

const f3 = (x, y) => [x / 2 + 0.25, y / 2 + 0.5];
