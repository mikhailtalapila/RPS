function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = { ...value, updatedOn: Date.now() };
    return obj;
  }, {});
}

let firstEvent = { id: 123, name: "Test Event 123", date: "2026-01-01" };
let secondEvent = { id: 124, name: "Test Event 124", date: "2026-10-10" };
let thirdEvent = { id: 125, name: "Test Event 125", date: "2026-12-12" };

let events = [firstEvent, secondEvent, thirdEvent];

console.log(groupById(events));
