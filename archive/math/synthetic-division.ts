// npm run ts -- ./archive/math/synthetic-division.ts
import { to_opposite_sign } from "./utils";

type Polynomial = Array<{ coefficient: number; degree: number | null }>;

const poly = (...coefficients: Array<number>): Polynomial => {
  return coefficients.map((coefficient, index) => {
    const degree = coefficients.length - 1 - index;
    return {
      coefficient,
      degree: !degree ? null : degree,
    };
  });
};

const format_coefficient = ({ coefficient, degree }: Polynomial[number], first?: boolean): string => {
  const sign = coefficient < 0 ? "-" : "+";
  const abs_coefficient = Math.abs(coefficient);
  const coefficient_with_degree =
    degree === null ? `${abs_coefficient}` : degree === 1 ? `${abs_coefficient}x` : `${abs_coefficient}x^${degree}`;
  return first
    ? coefficient < 0
      ? `${sign} ${coefficient_with_degree}`
      : coefficient_with_degree
    : `${sign} ${coefficient_with_degree}`;
};

const format_poly = (polynomial: Polynomial): string => {
  return polynomial.map((poly_part, i) => format_coefficient(poly_part, i === 0)).join(" ");
};

const synthetic_division = (polynomial: Polynomial, divisor: string): void => {
  const r = to_opposite_sign(Number(divisor.split("x")[1]));
  let quotient: Polynomial = [];
  let table: { [key: string]: { [key: string]: number | null } } = Object.assign(
    {},
    ...polynomial.map(({ coefficient }) => ({ [coefficient]: {} }))
  ); // auto sorts WHY?????

  for (const [index, { coefficient, degree: initial_degree }] of polynomial.entries()) {
    const degree = initial_degree ? initial_degree - 1 || null : null;
    if (index === 0) {
      table[coefficient]["row1"] = null;
      table[coefficient]["row2"] = coefficient;
      quotient.push({ coefficient, degree });
      continue;
    }
    const prev = quotient[index - 1].coefficient;
    table[coefficient]["row1"] = prev * r;
    table[coefficient]["row2"] = coefficient + prev * r;
    quotient.push({ coefficient: coefficient + prev * r, degree });
  }
  const remainder = quotient[quotient.length - 1];
  quotient.pop();
  console.log(`r: ${r}`);
  console.table(table);
  console.log(`${format_poly(quotient)} + ${remainder.coefficient}/${divisor}`);
};

synthetic_division(poly(-3, 10, -6, 9), "x-3");
