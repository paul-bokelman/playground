// npm run ts -- ./archive/validate-zod.ts
import type { AnyZodObject } from "zod";
import { z, ZodError } from "zod";

const data = {
  name: "John",
  age: 30,
  email: "test@gmail.com",
};

export const validate = async (schema: AnyZodObject) => {
  const r = await schema.safeParseAsync(data);
  if (r.success) return r.data;

  const error = r.error;

  if (error instanceof ZodError) {
    console.log(error.formErrors);
    return error.formErrors; // validation error
  }

  throw error; // internal server error
};

const schema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

validate(schema);
