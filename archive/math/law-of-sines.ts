// npm run ts -- ./archive/math/law-of-sines.ts
import { to_radians, to_degrees } from "./utils";

const los_for_angle = ([side1, side2]: [number, number], side2_angle: number) => {
  return to_degrees(Math.asin((side1 * Math.sin(to_radians(side2_angle))) / side2));
};
const los_for_side = (angle2_side: number, [angle1, angle2]: [number, number]) => {
  return (angle2_side * Math.sin(to_radians(angle1))) / Math.sin(to_radians(angle2));
};

const law_of_sines = (
  initial_sides: { a?: number | undefined; b?: number | undefined; c?: number | undefined }, // type should be more strict
  initial_angles: { A?: number | undefined; B?: number | undefined; C?: number | undefined }
) => {
  // additional work for UX ;)
  const sides = { a: undefined, b: undefined, c: undefined, ...initial_sides };
  const angles = { A: undefined, B: undefined, C: undefined, ...initial_angles };
  // user could break this... fuck the user
  const ssa = Object.values(sides).filter((side) => side !== undefined).length === 2;

  if (ssa) {
    const missing_side_char = Object.entries(sides).filter(([_, value]) => value === undefined)[0][0];

    const missing_angles = Object.entries(angles).reduce((acc, [key, value]) => {
      if (value === undefined) acc.push(key);
      return acc;
    }, [] as string[]);

    const X_char = missing_angles.find((key) => key !== missing_side_char.toUpperCase()) as string;
    const full_given_char = ["A", "B", "C"].filter((char) => !missing_angles.includes(char))[0] as keyof typeof angles;

    const X = los_for_angle(
      [
        sides[X_char?.toLowerCase() as keyof typeof sides] as number, // horrendous type casting...
        sides[full_given_char.toLowerCase() as keyof typeof sides] as number,
      ],
      angles[full_given_char] as number
    );

    const Y = 180 - (X + (angles[full_given_char] as number));

    const missing_side = los_for_side(sides[full_given_char.toLocaleLowerCase() as keyof typeof sides] as number, [
      Y,
      angles[full_given_char] as number,
    ]);

    return {
      [X_char.toUpperCase()]: X,
      [missing_angles.filter((char) => char !== X_char.toUpperCase())[0]]: Y,
      [missing_side_char]: missing_side,
    };
  }

  // saa case (WIP)
};

console.log(law_of_sines({ a: 39, c: 63 }, { A: 58 }));
