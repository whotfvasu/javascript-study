// Imidiately invoked function expression
// () ()

(function chai(){
    //named iffe
    console.log("DB connected");
})();

// here ; is necessary to end iife

(()=>{
    console.log("DB2 connected");
})();

((name)=>{
    console.log(`Hello ${name}`);
})("vasu")
