import chalk from "chalk";

const OSC = "\u001B]";
const BEL = "\u0007";
const SEP = ";";

const consoleLink = (text: string, url: string) =>
  chalk
    .hex("#57C7FF")
    .underline.bold(
      [OSC, "8", SEP, SEP, url, BEL, text, OSC, "8", SEP, SEP, BEL].join("")
    );

export function stack() {
  const e = new Error();
  const frame = e.stack!.split("\n")[2];
  console.log(e);
  const file = {
    path: frame.split("(")[1].split(")")[0],
    get name() {
      return this.path.split(`${process.cwd()}/`)[1].split(":")[0];
    },
    get line() {
      return Number(this.path.split(":")[1]);
    },
    get col() {
      return Number(this.path.split(":")[2]);
    },
  };

  const func = frame.split(" ")[5];
  return { file, func };
}

type Log = (message: any) => void;

export const log: Log = (message) => {
  const { file, func } = stack();
  const s = chalk.gray(
    `${consoleLink(
      `${file.name}:${file.line}`,
      `${file.path.split(":")[0]}` // link to func
    )} => ${func}()`
  );
  const t = chalk.gray(new Date().toLocaleTimeString());
  const head = chalk.gray(`\n[${s} @ ${t}]`);
  console.log(head);
  console.log(message);
};

const test = () => {
  log("hello world");
};

test();
