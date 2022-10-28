"use strict";


const obj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};

obj.makeTest();

const {border, bg} = obj.colors;
console.log(border);


console.log(Object.keys(obj).length);

// console.log(obj.name);

// delete obj.name;

// console.log(obj);

// let counter =0;
// for (let key in obj) {
//     if (typeof(obj[key]) === 'object'){
//         for (let i in obj[key]) {
//             console.log(`Свойства ${i}, имеет значение ${obj[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойства ${key}, имеет значение ${obj[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);
