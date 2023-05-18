// npm run ts -- ./archive/math/function.ts

const evaluateFunction = (f: (x: number) => number, d: Array<number>) => {
  for (const x of d) {
    console.log(`f(${x}) = ${f(x)}`);
  }
};

const range = (start: number, end: number, step: number) => {
  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  return Array.from(Array(length), (_, i) => start + i * step);
};

evaluateFunction((x) => 0.25 * Math.pow(50 - x, 2), [8, 10, 12]);
