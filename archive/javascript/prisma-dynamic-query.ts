import _ from "lodash";
import util from "util";

const options = {
  id: "32",
  invites: '["club"]',
  clubs: '["tags","users"]',
  roles: "true",
};

const [identifier, identifierValue] = [Object.keys(options)[0], options[Object.keys(options)[0]]];

const queryConstructor = (options) => {
  const q = Object.keys(options).reduce((acc, key) => {
    if (key !== identifier) {
      acc[key] = options[key];
    }
    return acc;
  }, {});

  const query = Object.assign(
    {},
    ...Object.keys(q).map((key) => {
      const value = JSON.parse(q[key]);
      if (value === true) {
        return { [key]: true };
      } else if (Array.isArray(value)) {
        const include = {};
        value.forEach((arrayItem) => {
          include[arrayItem] = true;
        });
        return { [key]: { include } };
      }
    })
  );

  const masterQuery = {
    where: {
      [identifier]: identifierValue,
    },
    include: query,
  };

  return masterQuery;
};

console.log(queryConstructor(options));

const shouldBe = {
  where: {
    [identifier]: identifierValue,
  },
  include: {
    roles: true,
    clubs: {
      include: {
        tags: true,
        users: true,
      },
    },
    invites: {
      include: {
        club: true,
      },
    },
  },
};

console.log(util.inspect(shouldBe, { depth: null }));

console.log("equal ===", _.isEqual(shouldBe, queryConstructor(options)));
