"use strict";


let str = "some";

let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const solider = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};

// const john = {
//     health: 100
// };

const john = Object.create(solider);


// john.__proto__ = solider;

// Object.setPrototypeOf(john, solider);



// console.log(john. armor);

john.sayHello();