"use strict";


const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';


box.style.cssText = 'background-Color: blue; width: 500px;';


btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }




hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div  = document.createElement('div');

// const text = document.createTextNode('тут был я');

div.classList.add('black');


// document.body.append(div);


// wrapper.append(div);

// wrapper.prepend(div);


// wrapper.before(div);
// wrapper.after(div);



// circle[0].remove();


hearts[0].replaceWith(circles[0]); 


