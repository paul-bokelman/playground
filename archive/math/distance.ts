// npm run ts -- ./archive/math/distance.ts
type Coordinates = [number, number];

const calculate_distance = ([x1, y1]: Coordinates, [x2, y2]: Coordinates) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

console.log(calculate_distance([-4, -2], [2, 4]));
