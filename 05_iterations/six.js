const arr = [1, 2, 3, 4];

initialValue = 0;

const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sum);

const sum2 = arr.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum2);

const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];
const totalage = user.reduce((acc,crr) => acc+crr.age,0) 
console.log(totalage);