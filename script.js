"use strict";

// to string
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));


// 2)

console.log(typeof(5 + ""));


// to number 

console.log(typeof(Number("4")));

console.log(typeof(+"5"));


// to boolean

// 0, "", NaN, null, undefined; - false


let h = null;

if(h) {
    console.log('Working');
};

h = 1;

if(h) {
    console.log('Working');
};


console.log(typeof(Boolean("4")));

console.log(typeof(!!"1111"));