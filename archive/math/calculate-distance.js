const calculate_distance = (x1, y1, x2, y2) => {
  const x = Math.pow(x2 - x1, 2);
  const y = Math.pow(y2 - y1, 2);
  const sum = x + y;
  const root = Math.sqrt(sum);
  console.log(sum, root);
  return root;
};

calculate_distance(-4, -2, 2, 4);
