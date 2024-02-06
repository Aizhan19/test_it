console.log(document.body);
// document.body.style.background = 'red'; // DOM

let color = 'red'
setInterval(()=>{
// color = color === 'red' ? 'green' : 'red'
// document.body.style.background = color // DOM  Document Object Module
}, 1000);


// BOM - Browser Object Module

// alert('hasdf');
// prompt('hasdf');
console.log(navigator.userAgent);
console.log(navigator);

console.log(location);
console.log(localStorage);

console.log(document.body);
console.log(document.head);

console.log(document.body.childNodes);
console.log(document.documentElement);

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
btn1.style.background = 'yellow';
btn2.style.background = 'red';
// console.log(btn1);

let listItems = document.getElementsByTagName('li')
console.log();
for( let item of listItems ){
    item.style.fontSize = '48px'
    console.log(item);
}

console.log(document.getElementsByClassName('button'));

// document.querySelector
// document.querySelectorAll

console.log(document.querySelector('li'));
console.log(document.querySelectorAll('li'));
console.log(document.querySelectorAll('ul > li'));
console.log(document.querySelectorAll('ol > li'));
console.log(document.querySelector('#btn1'));
console.log(document.querySelector('.heading1'));
console.log(document.querySelector('h2'));
console.log(document.querySelector('h4'));