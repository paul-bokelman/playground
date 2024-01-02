// npm run ts -- ./archive/javascript/remove-unchanged.ts

interface Dog {
  name: string;
  age: number;
  breed: "husky" | "poodle" | "pug";
  nickname: string | null;
}

const initialObject: Dog = {
  name: "Bingo",
  age: 3,
  breed: "pug",
  nickname: null,
};

const changedObject: Dog = {
  name: "Bingo",
  age: 3,
  breed: "pug",
  nickname: "Bing",
};

const values = Object.entries(changedObject).reduce((acc, [key, value]) => {
  if (initialObject[key as keyof Dog] !== (value as Dog[keyof Dog])) {
    acc[key as keyof Partial<Dog>] = value;
  }
  return acc;
}, {} as Partial<Dog>);

console.log(values);
