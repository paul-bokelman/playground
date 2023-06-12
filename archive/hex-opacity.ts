// npm run ts -- ./archive/hex-opacity.ts

// used on pab.dev
const hex1 = "#7a1a10";
const hex2 = "#bd029720";
const hex3 = "bd02972";

const adjustOpacity = (hexA: string, newAlpha: number | ((prev: number) => number)) => {
  hexA = hexA.includes("#") ? hexA.substring(1) : hexA;
  const [hex, alpha] = hexA.length > 6 ? [hexA.substring(0, 6), Number(hexA.substring(6, 8))] : [hexA, 100];
  if (typeof newAlpha !== "function") return `#${hex}${newAlpha}`;
  return newAlpha(alpha) >= 100 ? `#${hex}` : newAlpha(alpha) < 0 ? `#${hex}` : `#${hex}${newAlpha(alpha)}`;
};

console.log(adjustOpacity(hex1, 40));
console.log(adjustOpacity(hex2, (a) => a + 72));
console.log(adjustOpacity(hex3, 40));
