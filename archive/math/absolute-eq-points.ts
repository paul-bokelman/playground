// npm run ts -- ./archive/math/absolute-eq-points.ts

type AbsoluteEquation = (multiplier: number, [h, k]: [number, number]) => (x: number) => number;

const absolute_equation: AbsoluteEquation = (multiplier, [h, k]) => {
  return (x) => {
    return multiplier * Math.abs(x + h) + k;
  };
};

const points = (abs_eq: (x: number) => number, n: number, start: number) => {
  let points: Array<[number, number]> = [];

  const range = Array.from({ length: n }).map((_, v) => {
    if (v < n / 2) return v + 1 + start;
    return v - n + start;
  });

  for (const x of range) {
    const y = abs_eq(x);
    points.push([x, y]);
  }

  const formatted_points = points
    .sort(([x1, y1], [x2, y2]) => y2 - y1)
    .map(([x, y]) => `(${x}, ${y})`)
    .join("\n");

  console.log(formatted_points);
};

points(absolute_equation(-2, [5, 3]), 10, -5);

export {};
