// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const it of arr) {
  console.log(it);
}

//maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// for of with objects
const obj = {
  name: "John",
  age: 30,
  country: "USA",
};
//obj is not iterable
for (const [key, value] of obj) {
  console.log(key, ":-", value);
}
