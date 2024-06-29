//for each loop
const coding = ["js","html","css","react"]
coding.forEach(function(val){
    console.log(val)
});
coding.forEach(Element => {
    console.log(Element)
});
coding.forEach((val,index,arr) => {
    console.log(val,index,arr)
});


//iterations on array of object 
const users = [
    {name:"john",age:25},
    {name:"peter",age:30},
    {name:"susan",age:35},
]

users.forEach((item)=>{
    console.log(item.name);
})