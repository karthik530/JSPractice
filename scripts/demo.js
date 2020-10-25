"use strict";
console.log("Hello World");
var a =10;
var b =2;
if(a===10){
    let b=20;
    var a = 30;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
var a =1;
var a=2;


const testArrowFunction = (a,b)=>5*a+b;

console.log(testArrowFunction(3,5));

const testRestFunction = (message,...testval)=>{
 console.log(message);
 console.log(testval);
}

testRestFunction('Hello','val1','val2','val3');


//# sourceMappingURL=demo.js.map