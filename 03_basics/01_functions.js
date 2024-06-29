function saymyName() {
  console.log("My name is Vasu");
}
saymyName();

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

const result = addTwoNumbers(1, 4); //that's wrong
console.log(result);

function add(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result2 = add(1, 4); // that's right
console.log(result2);

function login(username = "vasu") {
  //default value given to username so if no value provided than it will be used
  return `${username} just logged in`;
}

console.log(login())
console.log(login("gaka"))

function calucateCashPrize(...num1){
    return num1
}
console.log(calucateCashPrize(1,2,3,4));

const user= {
    username: "vasu",
    price : 199
}

function handleObject(anyobject){
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

const newArr = [200,300,400,500]

function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(newArr))