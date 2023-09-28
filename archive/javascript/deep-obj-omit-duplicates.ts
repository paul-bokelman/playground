// npm run ts -- ./archive/deep-obj-omit-duplicates.ts

// only for deep nested objects
const initialValues = {
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    ip: [192, 543, 123],
    subaddress: {
      hello: "there",
    },
  },
};
const values = {
  address: {
    street: "7968 alg road",
    city: "Anytown", // will be omitted
    ip: [192, 543, 842], // arr for test
    subaddress: {
      hello: "world",
    },
  },
};

const omit_duplicates = ({
  initialValues,
  values,
}: {
  initialValues: Record<string, any>;
  values: Record<string, any>;
}) => {
  const filteredValues = Object.entries(values).reduce((acc, [key, value]) => {
    Object.entries(value).forEach(([childKey, childValue]) => {
      if (typeof childValue === "object" && !Array.isArray(childValue)) {
        Object.entries(childValue as Record<string, unknown>).forEach(([grandchildKey, grandchildValue]) => {
          // who cares about time complexity anyways
          if (initialValues[key][childKey][grandchildKey] !== grandchildValue) {
            if (!acc[key]) return (acc[key] = { [childKey]: { [grandchildKey]: grandchildValue } });
            if (!acc[key][childKey]) return (acc[key][childKey] = { [grandchildKey]: grandchildValue });
            return (acc[key][childKey][grandchildKey] = grandchildValue);
          }
        });
        return acc;
      }
      if (initialValues[key][childKey] !== childValue) {
        if (!acc[key]) return (acc[key] = { [childKey]: childValue });
        return (acc[key][childKey] = childValue);
      }
    });

    return acc;
  }, {} as Partial<typeof initialValues>);

  return filteredValues;
};

console.log(omit_duplicates({ initialValues, values }));
