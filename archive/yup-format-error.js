const inner = [
  {
    value: "Astro",
    path: "body.username",
    type: "Unique Username",
    errors: ["Username is already in use."],
    params: {
      value: "Astro",
      originalValue: "Astro",
      path: "body.username",
    },
    inner: [],
    name: "ValidationError",
    message: "Username is already in use.",
  },
  {
    value: "stro#3313",
    path: "body.discordUsername",
    type: "Unique Discord username",
    errors: ["Discord username is already in use."],
    params: {
      value: "stro#3313",
      originalValue: "stro#3313",
      path: "body.discordUsername",
    },
    inner: [],
    name: "ValidationError",
    message: "Discord username is already in use.",
  },
  {
    value: "@paul_bokelman",
    path: "body.twitter",
    type: "Unique Twitter handle",
    errors: ["Twitter handle is already in use."],
    params: {
      value: "@paul_bokelman",
      originalValue: "@paul_bokelman",
      path: "body.twitter",
    },
    inner: [],
    name: "ValidationError",
    message: "Twitter handle is already in use.",
  },
];

const formattedErrors = inner.map((error) => {
  return {
    path: error.path.split(".")[1] || error.path,
    message: error.message,
  };
});

console.log(formattedErrors);
