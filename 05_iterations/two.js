// for in loop for accessing object

const obj = {
    name: "John",
    age: 30,
    country: "USA",

}

for (const key in obj) {
   console.log(key,":-",obj[key]);
}

// for in loop in arrays
const arr = ["apple", "banana", "cherry", "date", "elderberry"];
for(const key in arr){
    console.log(arr[key]);
}

//for in does not work for map