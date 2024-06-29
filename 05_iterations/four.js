const coding = ["js", "html", "css", "react"];
const values = coding.forEach(function (val) {
  console.log(val);
  return val;
});
console.log(values); //foreach does not return any value

const numbers = [1, 2, 3, 4, 5];

const newnums = numbers.filter((nums) => nums > 3);

const newnums2 = numbers.filter((nums) => {
  nums > 3;
}); //if scope used then you have to explicitly return

console.log(newnums);

console.log(newnums2);

const newnums3 = numbers.filter((nums) => {
  return nums > 3;
});

console.log(newnums3);

//implementing filter with foreach

const newnums4 = [];
numbers.forEach((nums) => {
  if (nums > 3) {
    newnums4.push(nums);
  }
});

console.log(newnums4);