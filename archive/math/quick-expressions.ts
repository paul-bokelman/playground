// npm run ts -- ./archive/math/quick-expressions.ts

type TableMethod = "multiplication" | "division" | "addition" | "subtraction";

const computed_methods: { [key in TableMethod]: { symbol: string; operation: (n1: number, n2: number) => number } } = {
  // including operation makes calculation easier.
  multiplication: { symbol: "x", operation: (n1, n2) => n1 * n2 },
  division: { symbol: "/", operation: (n1, n2) => n1 / n2 },
  addition: { symbol: "+", operation: (n1, n2) => n1 + n2 },
  subtraction: { symbol: "-", operation: (n1, n2) => n1 - n2 },
};

const random_n = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

const generate_number = (digits?: number | undefined) => {
  // should have option to include decimals.
  // numbers range from 1-4 integers in length if !digits
  return Math.floor(Math.random() * Math.pow(10, digits ?? random_n(1, 3)));
};

const quick_expressions = (
  n: number = 1,
  { methods, digits }: { methods: TableMethod[]; digits: number | undefined }
) => {
  const gen_n = () => generate_number(digits ?? undefined);

  const random_method = () => {
    if (methods.length === 1) return computed_methods[methods[0]];
    return computed_methods[methods[random_n(0, methods.length)]];
  };

  const expressions: { n1: number; n2: number; method: (typeof computed_methods)[keyof typeof computed_methods] }[] =
    []; //this is really messy

  console.log("Expressions:");
  for (let i = 0; i < n; i += 1) {
    const [n1, n2] = [gen_n(), gen_n()]; // not pushed as array in order to avoid random array sorting
    const method = random_method();
    expressions.push({ n1, n2, method });
    console.log(`${n1} ${method.symbol} ${n2}`);
  }

  console.log("\nSolutions:");
  for (const { n1, n2, method } of expressions) {
    console.log(`${n1} ${method.symbol} ${n2} = ${method.operation(n1, n2)}`);
  }
  // expressions and solutions are separated in order to avoid seeing them while writing down problem.
  return;
};

const presets = {
  x: { methods: ["multiplication"], digits: undefined },
  "/": { methods: ["division"], digits: undefined },
  "+": { methods: ["addition"], digits: undefined },
  "-": { methods: ["subtraction"], digits: undefined },
  all: { methods: ["addition", "division", "multiplication", "subtraction"], digits: undefined },
} as { [key: string]: { methods: TableMethod[]; digits: number | undefined } };

// quick_expressions(5, presets["x"]);
quick_expressions(10, { methods: ["multiplication"], digits: 1 });
