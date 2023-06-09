export const to_opposite_sign = (n: number): number => {
  if (n >= 0) return -Math.abs(n);
  return Math.abs(n);
};

export const is_positive = (n: number) => {
  return n >= 0;
};
