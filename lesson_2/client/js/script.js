"use strict"

if (4 === 9) {
    console.log('ok');
} else {
    console.log('Error');
}

const num = 50;

if (num<45) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много!');
}else {
    console.log('Ok!');
}


(num === 50 ) ? console.log('Ok!') : console.log('Error');


switch (num) {
    case 50:
        console.log('Ok!!');
        break
}