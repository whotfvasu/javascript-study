//singleton
Object.create;

//object literals

const mySym = Symbol("key1");
const JsUser = {
  name: "Vasu",
  [mySym]: "mykey1",
  age: 19,
  email: "vasuparashar18gmail.com",
};

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(typeof JsUser.mySym);

JsUser.email = "vasudocode@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello vasu");
};

JsUser.greeting2 = function () {
    console.log(`hello ${this.name}`);
  }
console.log(JsUser.greeting());
console.log(JsUser.greeting2());