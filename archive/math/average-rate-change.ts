// npm run ts -- ./archive/math/average-rate-change.ts

const compute_arc = (f: (x: number) => number, [b, a]: [number, number]) => {
  const arc = (f(b) - f(a)) / (b - a);
  console.log(`Δx/Δy = ${arc}`);
  return arc;
};

compute_arc((x) => 320 * Math.pow(Math.E, -3.1 * x), [0, 5]);
