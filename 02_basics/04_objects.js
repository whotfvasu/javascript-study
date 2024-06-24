const regUser = {
    email: "vasuparashar@gmail.com",
    fullname: {
        userfullname :{
            firstname: "vasu",
            lastname: "parashar"
        }
    }
}

console.log(regUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1,obj2,obj3)
console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);

// array of objects
const User = [
    {id:1, name:"vasu", age:25},
    {id:2, name:"parashar", age:30},
    {id:3, name:"vasu", age:25},
]
console.log(User[1].name);

console.log(Object.keys(regUser))