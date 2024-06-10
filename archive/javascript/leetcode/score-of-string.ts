// npm run ts -- ./archive/javascript/leetcode/score-of-string.ts

let s = "hello";

// calculate sum of absolute difference of ascii values of characters
function scoreOfString(s: string): number {
  let sum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
}

scoreOfString(s);
