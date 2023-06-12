// npm run ts -- ./archive/math/average-rate-change.ts

const function_arc = (f: (x: number) => number, [b, a]: [number, number]) => {
  const arc = (f(b) - f(a)) / (b - a);
  console.log(`Δx/Δy = ${arc}`);
  return arc;
};

const points_arc = ([x1, y1]: [number, number], [x2, y2]: [number, number], fixed?: number) => {
  const arc = (y2 - y1) / (x2 - x1);
  console.log(`Δx/Δy(${x2 - (x2 - x1)}) = ${fixed ? arc.toFixed(fixed) : arc}`);
  return arc;
};

const table_arc = (table: [number, number][], fixed?: number) => {
  for (const point of table) {
    if (typeof table[table.indexOf(point) + 2] === "undefined") return; // should exit function...
    points_arc(point, table[table.indexOf(point) + 2], fixed);
  }
};

function_arc((x) => 320 * Math.pow(Math.E, -3.1 * x), [0, 5]);

points_arc([1.5, 14], [2.5, 14]);

table_arc(
  [
    [0, 260],
    [5, 244.2],
    [10, 234.7],
    [15, 228.9],
    [20, 225.4],
    [25, 223.3],
    [30, 222],
    [35, 221.2],
    [40, 220.7],
    [45, 220.4],
    [50, 220.3],
    [55, 220.2],
    [60, 220.1],
  ],
  2
);
