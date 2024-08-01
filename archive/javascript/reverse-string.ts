import bcrypt from "bcrypt";
// npm run ts -- ./archive/javascript/reverse-string.ts

// const string = "Hello World!";

// const reverse_string: Array<string> = [];
// for (let charIndex = 0; charIndex < string.length + 1; charIndex++) {
//   reverse_string.push(string.charAt(string.length - charIndex));
// }

// console.log(reverse_string.join(""));

const main = async () => {
  console.log(await bcrypt.hash("Eiv3uONK22TQCthIInL8w85NJEkMwqrjS1fzw37Y8Kxf77n", 10));
};

main();
