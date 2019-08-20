
function drawPoint(x, y) {
  circle(x * SCALE, y * SCALE, point_width);
}

const makeChaosGame = (rules) => (x, y, r) => {
  let i = 0;
  while (i < rules.length) {
    if (r < rules[i].limit) {
      return rules[i].function(x, y);
    }
    i++;
  }
}