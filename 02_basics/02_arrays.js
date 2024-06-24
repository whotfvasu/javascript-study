const marvel = ["thor", "ironman"]
const dc = ["batman", "superman"]

const all = marvel.concat(dc)
console.log(all)

const all2 = [...marvel,...dc]
console.log(all2);

console.log(Array.from("vasu"))
console.log(Array.of("vasu","vasu"))