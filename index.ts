import { exec } from "child_process";

enum ExtensionEnum {
  ts = "ts",
  py = "py",
  js = "js",
}

type Extension = keyof typeof ExtensionEnum;

const [file_name] = process.argv.slice(2);

const get_extension = (): Extension => {
  const [_, extension] = file_name.split(".");
  if (!extension) throw new Error("File name must have an extension");
  if (!Object.values(ExtensionEnum).includes(extension as ExtensionEnum)) throw new Error("Invalid extension");
  return extension as Extension;
};

const get_command = (extension: Extension): string => {
  switch (extension) {
    case "ts":
      return `ts-node ./archive/javascript/${file_name}`;
    case "py":
      return `python3 ./archive/python/${file_name}`;
    case "js":
      return `node ./archive/javascript/${file_name}`;
  }
};

exec(get_command(get_extension()), (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
