function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let testArray = ["test", "test2", "test1", "test", "test2", "test3"];
console.log(unique(testArray));
