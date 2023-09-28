import * as jwt from "jsonwebtoken";

type AuthPayload = jwt.JwtPayload & { id: string; ccid: string; email: string };

export const getAuthenticatedUser = () => {
  const token = jwt.sign(
    {
      id: 5,
      ccid: "ADJIFG",
    },
    "secret",
    { expiresIn: "1h" }
  );

  const res = jwt.verify(token, "secret") as AuthPayload;

  console.log(res);
};

getAuthenticatedUser();
