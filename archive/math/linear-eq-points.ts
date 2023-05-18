// npm run ts -- ./archive/math/linear-eq-points.ts
const equation = (slope: number, degree: number, y_intercept: number) => {
  return (x: number) => {
    return slope * Math.pow(x, degree) + y_intercept;
  };
};

const graph_points = (equation: (x: number) => number, x_range: number[], y_range: number[], step: number) => {
  const points: Array<[number, number]> = [];
  for (let x = x_range[0]; x <= x_range[1]; x += step) {
    const y = equation(x);
    if (y >= y_range[0] && y <= y_range[1]) {
      points.push([x, y]);
    }
  }
  return points;
};

const points = graph_points(equation(1, 1, -1), [-10, 10], [-10, 10], 1);

console.log(points);

export {};
