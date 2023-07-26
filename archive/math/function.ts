// npm run ts -- ./archive/math/function.ts

export const evaluate_function = (f: (x: number) => number, d: Array<number>) => {
  const res = [];
  for (const x of d) {
    res.push(f(x));
    console.log(`f(${x}) = ${f(x)}`);
  }

  return res;
};

export const range = (start: number, end: number, step: number) => {
  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  return Array.from(Array(length), (_, i) => start + i * step);
};

const f = (x: number) => 3.2 - 1.3 * Math.sin(2.5 * x + 2.2);

const sum = evaluate_function(f, range(1, 5, 1)).reduce((acc, curr) => (acc += curr * 0.1), 0);
console.log(sum);
