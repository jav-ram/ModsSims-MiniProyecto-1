const pointWidth = 3;
const SCALE = 60;

const f1P = 0.85;
const f2P = 0.92;
const f3P = 0.99;

let xHalf;
let yHalf;

const f1 = (x, y) => [x * 0.85 + y * 0.04 + 0.0, x * -0.04 + y * 0.85 + 1.6];

const f2 = (x, y) => [-0.15 * x + 0.28 * y + 0.0, x * 0.26 + y * 0.24 + 0.44];

const f3 = (x, y) => [x * 0.2 + y * -0.26 + 0.0, x * 0.23 + y * 0.22 + 1.6];

const f4 = (x, y) => [x * 0.0 + y * 0.0, x * 0.0 + y * 0.16];

let X;
let Y;

function getRandomInt(min, max) {
  return Math.floor(Math.floor(Math.random() * (max - min)) + min);
}

function drawPoint(x, y) {
  circle(x * SCALE, y * SCALE, pointWidth);
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  xHalf = (windowWidth) / 2;
  yHalf = (windowHeight) / 2;
  translate(xHalf, yHalf);
  background(227, 227, 227);

  drawPoint(0, 0);

  X = getRandomInt(-xHalf, xHalf);
  Y = getRandomInt(-yHalf, yHalf);
}

function draw() {
  translate(xHalf - 200, yHalf - 200);
  for (let i = 0; i < 100; i += 1) {
    [X, Y] = chooseF(X, Y);
    drawPoint(X, Y);
  }
}

const chooseF = (x, y) => {
  const r = Math.random();
  if (r < f1P) {
    return f1(x, y);
  }
  if (r < f2P) {
    return f2(x, y);
  }
  if (r < f3P) {
    return f3(x, y);
  }
  return f4(x, y);
};
