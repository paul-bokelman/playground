// npm run ts -- ./archive/math/change-as-area.ts
import { round } from "./utils";

const compute_area_change = (
  f: (x: number) => number,
  [start, end]: [number, number],
  step: number,
  side: "left" | "right" | "mid",
  precision: number = 2
) => {
  const interval_length = Math.floor(Math.abs((end - start) / step)) + 1;
  const values = Array.from({ length: interval_length })
    .map((_, i) => round(start + i * step, precision))
    .slice(
      side === "left" ? 0 : side === "right" ? 1 : undefined,
      side === "left" ? interval_length - 1 : side === "right" ? interval_length : undefined
    );

  const evaluated_values = values.map((x) => f(x));

  const sum = evaluated_values.reduce((acc, curr) => {
    return (acc += curr * step);
  }, 0);

  return sum;
};

const f = (x: number) => -20 * Math.sin(0.23 * (x - 4.7));

compute_area_change(f, [1.25, 7], 0.5, "mid");

console.log(
  [-3.8, -2.6, -1.8, -1.2, -0.8, -0.6, -0.4].reduce((acc, curr) => {
    return (acc += curr * 5);
  }, 0)
);
