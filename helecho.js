const pointWidth = 1;
const SCALE = 60;

const rules = [
  {
    limit: 0.85,
    function: (x, y) => [x * 0.85 + y * 0.04 + 0.0, x * -0.04 + y * 0.85 + 1.6],
  },
  {
    limit: 0.92,
    function: (x, y) => [-0.15 * x + 0.28 * y + 0.0, x * 0.26 + y * 0.24 + 0.44],
  },
  {
    limit: 0.99,
    function: (x, y) => [x * 0.2 + y * -0.26 + 0.0, x * 0.23 + y * 0.22 + 1.6],
  },
  {
    limit: 1,
    function: (x, y) => [x * 0.0 + y * 0.0, x * 0.0 + y * 0.16],
  },
];

let xHalf;
let yHalf;


let X;
let Y;

let chooseF;

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

  chooseF = makeChaosGame(rules);
}

function draw() {
  translate(xHalf - 200, yHalf - 200);
  for (let i = 0; i < 100; i += 1) {
    [X, Y] = chooseF(X, Y, Math.random());
    drawPoint(X, Y);
  }
}
