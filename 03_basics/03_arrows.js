const user={
    username: "Vasu",
    email: "vasu@gmail.com",
    welcomemessage: function(){
        console.log("Welcome "+this.username);
        console.log(this);

    }
}
user.welcomemessage()
user.username="gaka"
user.welcomemessage()

// in brower global object is window object while here it is empty object
console.log(this); // empty object

//this can only work in object and not in functions
function test(){
    let user = "vasu"
    console.log(this.user);
}
test() //undefined

const test2 = ()=> {
    let user = "vasu"
    console.log(this.user);
}
test2()

// arrow functions
const addtwo = (num1,num2) => {
    return num1 + num2
}

//implcit return 
const add = (num1,num2) => num1 + num2
// if wrapped in paranthesis then return have to be used
// const add = (num1,num2) => return(num1 + num2)