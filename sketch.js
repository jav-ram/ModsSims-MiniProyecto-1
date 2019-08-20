const point_width = 5;
const SCALE = 500;

const rules = [
  {
    limit: 0.33,
    function: (x, y) => [x / 2, y / 2],
  },
  {
    limit: 0.66,
    function: (x, y) => [x / 2 + 0.5, y / 2],
  },
  {
    limit: 1,
    function: (x, y) => [x / 2 + 0.25, y / 2 + 0.5],
  }
]


let x_half;
let y_half;


let X;
let Y;

let chooseF;

function getRandomInt(min, max) {
  return Math.floor(Math.floor(Math.random() * (max - min)) + min);
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  frameRate(120);
  x_half = (windowWidth) / 2;
  y_half = (windowHeight) / 2;
  translate(x_half, y_half);

  background(227, 227, 227);

  drawPoint(0, 0);

  X = getRandomInt(-x_half, x_half);
  Y = getRandomInt(-y_half, y_half);

  chooseF = makeChaosGame(rules);
}

function draw() {
  for (let i = 0; i < 1000; i++) {
    [X, Y] = chooseF(X, Y, Math.random());
    drawPoint(X, Y);
  }
}

