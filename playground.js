let john = { name: "John", surname: "Smith", id: 1 };
let mary = { name: "Mary", surname: "Johnson", id: 2 };

let users = [john, mary];
let mappedUsers = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(mappedUsers);
