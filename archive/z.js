const ztable = require("ztable");

const sd = (variance, stand) => (variance ? Math.sqrt(variance) : stand);
const z = (val, mean, sd) => (val - mean) / sd;

const single = (variance, stand, mean, val, greater) => {
  const v = ztable(z(val, mean, sd(variance, stand)).toFixed(3));
  const f = greater ? 1 - v : v;
  console.log(f.toFixed(4));
};

const between = (variance, stand, mean, val1, val2) => {
  const v1 = ztable(z(val1, mean, sd(variance, stand)).toFixed(3));
  const v2 = ztable(z(val2, mean, sd(variance, stand)).toFixed(3));
  const f = v2 - v1;
  console.log(f.toFixed(4));
};

between(null, 21, 100, 81, 133);
single(null, 21, 100, 81, true);
