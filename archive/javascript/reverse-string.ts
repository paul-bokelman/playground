// npm run ts -- ./archive/javascript/reverse-string.ts

const string = "Hello World!";

const reverse_string: Array<string> = [];
for (let charIndex = 0; charIndex < string.length + 1; charIndex++) {
  reverse_string.push(string.charAt(string.length - charIndex));
}

console.log(reverse_string.join(""));
