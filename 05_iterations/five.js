const numbers = [1,2,3,4,5,6]

const newnums = numbers.map((nums)=>nums+10)
console.log(newnums)

//chaining
const newnums1 = numbers.map((nums)=>nums+10).map((nums)=>nums*10)
console.log(newnums1)


const newnums2 = numbers.map((nums)=>nums+10).map((nums)=>nums*10).filter((nums)=>nums>150)
console.log(newnums2)