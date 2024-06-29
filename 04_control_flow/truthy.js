// falsy values

// BigInt 0n, Null, undefined, 0, "",NaN

//truthy values

// 'false' , "0", " ", [], {}, function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log(`object is empty`);
}

// Nullish Coalescing operator (??): null undefined
let val1 ;
val1 = 5 ?? 10
console.log(val1);

// Terniary Operator
const price = 100
let discount = price > 100 ? 10 : 5
price >50 ?console.log("expensive"):console.log("cheap")
