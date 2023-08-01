export const to_opposite_sign = (n: number): number => {
  if (n >= 0) return -Math.abs(n);
  return Math.abs(n);
};

export const is_positive = (n: number) => {
  return n >= 0;
};

export const round = (x: number, precision: number) => {
  return Number(x.toFixed(precision));
};

export const to_radians = (deg: number) => {
  return deg * (Math.PI / 180);
};

export const to_degrees = (radians: number) => {
  return radians * (180 / Math.PI);
};
