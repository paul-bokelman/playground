import { object, string, number, AnySchema, ValidationError } from "yup";

interface ValidateParams {
  schema: AnySchema;
  data: any;
}

interface ValidatePayload {
  valid: boolean;
  errors: { path: string | undefined; message: string }[];
}

const validate = async ({
  schema,
  data,
}: ValidateParams): Promise<ValidatePayload> => {
  console.log(data);
  console.log({ ...data });
  try {
    const user = await schema.validate({ ...data }, { abortEarly: false });
    console.log(user);
    return { valid: true, errors: [] };
  } catch (e: unknown) {
    if (e instanceof ValidationError) {
      const errors = e.inner;
      return {
        valid: false,
        errors: errors.map(({ path, message }) => ({ path, message })),
      };
    }
    return {
      valid: false,
      errors: [{ path: undefined, message: e as string }],
    };
  }
};

const main = async () => {
  const userSchema = object({
    name: string().required().min(25),
    age: number().required().min(18),
  });

  const data = { name: "John Doe", age: 2 };
  const { valid, errors } = await validate({
    schema: userSchema,
    data,
  });

  console.log(valid, errors);
};

main();
