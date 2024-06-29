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

// directly accessing value from object

const course = {
    title: "javascript",
    price: 200

}

const {title} = course

console.log(title);

//we can further reduce the name of the key 

const {price : p} = course
console.log(p);

// this is called destructuring of object


//api responses are generated in form of json 

// {
//     "coursename": "js",
//     "price": 200
// }

// it can also be in form of array of objects

// [
//     {}
//     {}
// ]