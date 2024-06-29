let a = 300;
const b = 30;

if (true) {
  let a = 10;
  const b = 20;
  console.log("inner", a);
  console.log("inner", b);
}

console.log("outer", a);
console.log("outer", b);

// global scope ki entity ko scope mei access kr skte but scope ki entity ko globally nhi


function one() {
    const username = "vasu"
    function two(){
         const website = "youtube"
         console.log(username);
    }
    two()

    console.log(website);
    

}
one()