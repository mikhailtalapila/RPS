function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

let counts = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  312: 0,
  321: 0,
};

for (let i = 0; i <= 1000000; i++) {
  let arr = [1, 2, 3];
  shuffle(arr);
  counts[arr.join("")]++;
}

for (let key in counts) {
  console.log(`${key} ${counts[key]}`);
}
