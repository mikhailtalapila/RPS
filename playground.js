function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 59 };
let mary = { name: "Mary", age: 30 };

let users = [john, mary, pete];

let averageAge = getAverageAge(users);
console.log(averageAge);
