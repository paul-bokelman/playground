// npm run ts -- ./archive/math/function.ts

const pow = (n: number, x: number) => Math.pow(n, x);

const evaluateFunction = (f: (x: number) => number, d: Array<number>) => {
  const res = [];
  for (const x of d) {
    // res.push({ [x]: f(x) });
    res.push(f(x));
    console.log(`f(${x}) = ${f(x)}`);
  }

  return res;
};

const range = (start: number, end: number, step: number) => {
  const length = Math.floor(Math.abs((end - start) / step)) + 2;
  return Array.from(Array(length), (_, i) => start + i * step);
};

const f = (x: number) => (1425 * pow(Math.E, -0.25 * x)) / pow(1 + 3 * pow(Math.E, -0.25 * x), 2);

const sum = evaluateFunction(f, range(2, 3.8, 0.2)).reduce((acc, curr) => (acc += curr * 0.2), 0);
console.log(sum);
