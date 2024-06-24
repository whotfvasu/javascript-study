const myDate = new Date()
console.log(myDate.toJSON( ));

let newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());

newDate.toLocaleDateString('Default', {
    weekday: "long"

})

console.log(newDate);
