// npm run ts -- ./archive/hex-rgb-opacity.ts
import convert from "color-convert";

// used on pab.dev
const hex = "#7a1a10";

const hexToRGBA = (hex: string) => {
  return `rgba(${[...convert.hex.rgb(hex), 1].join(", ")})`;
};

const adjustAlpha = (rgbaString: string, newAlpha: number | ((currentAlpha: number) => number)) => {
  const [r, g, b, a] = rgbaString.split("(")[1].split(")")[0].split(", ").map(Number);
  const alpha = typeof newAlpha === "function" ? (newAlpha(a) >= 1 ? 1 : newAlpha(a) <= 0 ? 0 : newAlpha(a)) : newAlpha;
  return `rgba(${[r, g, b, alpha].join(", ")})`;
};

console.log(adjustAlpha(hexToRGBA(hex), (a) => a - 0.02));
