// npm run ts -- ./archive/path-with-params.ts

export const path_with_params = (
  initial_path: string,
  args?: { query?: Record<string, unknown>; params?: Record<string, unknown> }
): any => {
  if (!args) return initial_path;
  const tokens = initial_path.split("/");
  tokens.shift();

  const path: string[] = [];

  if (args.params) {
    tokens.forEach((token) => {
      if (token.includes("[")) {
        const param = token.replace(/\[|\]/g, "");
        Object.entries(args!.params!).forEach(([key, value]) => {
          if (key === param) return path.push(`/${value}`);
        });
        return;
      }
      return path.push(`/${token}`);
    });
  }

  if (args.query) {
    const keys = Object.keys(args.query);
    const last_key = args.query[keys[keys.length - 1]];
    Object.entries(args.query).forEach(([key, value]) => {
      const formatted_value = Array.isArray(value) ? value.join(",") : value;
      return path.push(`?${key}=${formatted_value}${key !== last_key && keys.length > 1 ? "&" : ""}`);
    });
  }

  return path.join("").trim();
};

// console.log(path_with_params("/hello/[var]/", { query: { hello: "world" }, params: { var: "world" } }));
console.log(path_with_params("/hello/"));
