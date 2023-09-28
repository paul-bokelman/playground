const determineStatus = ({ char, word, index }: { char: string; word: string; index: number }) => {
  if (char === word[index]) {
    return "correct";
  }

  if (word.includes(char)) {
    return "misplaced";
  }

  return "incorrect";
};

console.log(determineStatus({ char: "a", word: "apple", index: 0 }));
console.log(determineStatus({ char: "p", word: "apple", index: 3 }));
console.log(determineStatus({ char: "z", word: "apple", index: 4 }));
