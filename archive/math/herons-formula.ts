// npm run ts -- ./archive/math/herons-formula.ts

const herons_formula = (a: number, b: number, c: number) => {
  const s = 0.5 * (a + b + c); // half perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log("Area:", herons_formula(17, 22, 25));
