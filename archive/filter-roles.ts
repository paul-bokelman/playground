const clubId = 6;

const user = {
  roles: [
    { id: 5, clubId: 6 },
    { id: 6, clubId: 2 },
    { id: 7, clubId: 3 },
    { id: 1, clubId: 6 },
    { id: 2, clubId: 6 },
  ],
};

const rolesold = Array.from([...user.roles], (role) => {
  if (role.clubId !== clubId) {
    return {
      id: role.id,
    };
  }
});

const roles = user.roles
  .filter((role) => role.clubId === clubId)
  .map((role) => ({
    id: role.id,
  }));

console.log(rolesold);
console.log(roles);
