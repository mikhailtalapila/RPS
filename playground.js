function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 39 };
let mary = { name: "Mary", age: 27 };

let arr = [john, pete, mary];
console.log(sortByAge(arr));
