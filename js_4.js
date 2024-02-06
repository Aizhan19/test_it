// let userName = prompt('Enter your name');
  // console.log('name', userName);
  
  // if (userName) {
  //   console.log(`hello', ${userName}`);
  // } else {
  //   console.log('You did not enter the name');
  // }

  // let question = confirm('is 2+2 = 4');

  // if (question) {
  //   console.log('success');
  // } else {
  //   console.log('error');
  // }

  // let age1 = prompt('user1 enter age');
  // let age2 = prompt('user2 enter age');

  // if (age1 === age2) {
  //   console.log('kiwi');
  // }else if (age1>age2) {
  //   console.log('banana'); 
  // } else if (age1 === '3') {
  //   console.log('grape');
  // } else {  
  // console.log('apple');
  // }

  // let age = prompt('enter your age:')
  // age = +age; // perevesti string v chislo

  // age = Number(age); // perevesti string v chislo
   // age = parseInt(age); // perevesti string v chislo

  //  if (age) {
  //   alert('yor age is '+ age);
  //  } else {
  //   alert('you did not enter the age')
  //  }

  console.log('start');

  let count =1;
  while (count<=100) {
    
    console.log(count);
    count= count+1; 
      
  }
   console.log('end');

   console.log('start');

  let counts =100;
  while (counts>=0) {
    
    console.log(counts);
    counts= counts-1; 
      
  }
   console.log('end');

  //let user = prompt('vbkvbkdfvbkdfv', 'text something');
  
  
  
  for (let i=1; i<=10; i+=3) {
    console.log(i);
  }

  for (let i = 0; i<10; i++) {
    if (i%2 === 0) continue
    console.log(i);
  }

  function sum(num1,num2) {
    console.log(num1+num2)

  }
  sum(2,3)
  sum(265,233)

  function greet(name = 'friend') {
    console.log('hello ' + name)
  }

  greet()
  greet('kuba')

  // return !!!!!

  function pow(number, power=2) {
    return number**power 
  }

  console.log(pow(2));
  console.log(pow(2,4));

  let result = pow(5);
  let result2 = pow(6);

  console.log('result is ' + (result+result2));

  console.log(pow(6));

  let pi = 3.14
  function circle(length) {
    let text = 'a';
   let b = (length*pi) + text;
   return b
  }
console.log(circle(4));

// callbacks and arrows functions

  // function onSuccess() {
  //   alert('nice to meet you');
  // }

  // function onBlahBlah() {
  //   alert('blahblahblah');
  // }

  // function onDeny() {
  //   alert('Good bye');
  // }

  // function sayHello(cb,cb2) {
  //   let res = confirm('hello.how are you');
  //   if (res) {
  //     cb()
  //   } else {
  //     cb2()
  //   }
    
  // }

  // sayHello(onBlahBlah, onDeny);

  function sum(a,b) {
    return a+b;
  }
  console.log(sum(2,7));

  let sum2 = (a,b) => a+b; /* arrow function strelochnaya funkciya*/
  console.log(sum2(2,7));

  let numbers = [1,2,5,9,9,7,9,8,9];
  for (let i of numbers) {
    console.log(i);
  }
  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
  }
  
  // objects

  let user = {
    name: 'Aizhan',
    surname: "Rakhmetullina",
    email: 'zhan@gmail.com',
    age: 15,
    phoneNumber1: 877565366,
    phoneNumber2: 464+644568,

    pet: {
      name: 'aktos',
      age: 4,
    }
  }

  

  console.log(user);
  console.log(user.name);
  console.log(user['surname']);
  console.log(user[`phoneNumber${1}`]);
  console.log(user[`phoneNumber${2}`]);

  user.name = 'Kuba';
  console.log(user.name);
  console.log(user);

  let fullName = user.name + ' '  + user.surname; 
  console.log(fullName);

  console.log(user.pet.name);

  console.log(user);
  delete user.pet;
  delete user.phoneNumber2;

  console.log(user);

  user.cat={
    name:'murka',
    age: 3,
  }
  console.log(user);

  // proverka svoistv ob'ekta

  console.log('age' in user.cat);
  console.log('dog' in user);
  console.log('cat' in user);

  // 'for..in' in objets

  for (let key in user) {
    console.log(`user key is - ${key}, value - ${user[key]}`);
  }

  // v JS jest slozhnye vstroennye ob'ekty

  console.log(new Date());
  console.log(new Date('12-22-2000'));
  console.log(new Date('04-19-1994'));
  console.log(new Date('01-16-1993'));


  let a = 10;
  let b = a;
  console.log(a);
  console.log(b);

  let obj1 = {name: 'Kuba'};
  let obj2 = obj1;
  obj1.name = 'Aizhan';
  console.log(obj1);
  console.log(obj2);

  // sravnenie ovjects;
  let object1 = {name: 'Kuba'};
  let object2 = object1;
  console.log(object2 == object1);
  console.log(object2 === object1);
  
  let object3 = {name: 'Kuba'};
  let object4 = {name: 'Kuba'};
  console.log(object3 == object4);
  console.log(object3 === object4);

  object3 = object4;
  console.log(object3 == object4);
  console.log(object3 === object4);

  // klonirovanie objects
  
  let userr = {
    name: 'kuba',
    age: 23,

  }

  let clone = {}

  console.log(userr);
  console.log(clone);

  for (key in userr) {    /* 1 sposob */
    clone[key] = userr[key];

  }

  console.log(userr);
  console.log(clone);


  Object.assign(clone, userr);    /* 2 sposob */
  const clone2 = Object.assign({agse: 80}, userr)

  console.log('clone2', clone2);

  const clone3 = {...userr}   /* 3 sposob*/ 
  console.log('clone3', clone3);


  const clone5 = {...userr, mail: 'ddbdbf@dvd.com'};   
  console.log('clone5', clone5);



  let love = {
    names: 'Aizhan',
    surnames: "Rakhmetullina",
    emails: 'zhan@gmail.com',
    ages: 15,
    phoneNumber1s: 877565366,
    phoneNumber2s: 464+644568,

    pets: {
      name: 'aktos',
      age: 4,
    }
  }

  let hate = {
    ...love
  }
// deepclone bibleoteki gotovye: lodash 
  // var _ = require('lodash');
  // _cloneDeep([user1, hate])

  console.log(hate);

  love.names = 'Mika';
  hate.names = 'Rika';

  console.log('love', love);
  console.log('hate', hate);


  // methods objects
  let cat = {
    name: 'pusha',
    age: 3,
    sayHi() {
      console.log('hello, my name is', this.name);
      console.log('age is', this.age);
    },

    sayHi2: ()=> { // arrow function
      console.log('hello, my name is', this.name);
      console.log('age is', this.age);
    }
  }

  cat.sayHi();
  cat.sayHi2();

  console.log(this); //this === wndow

  //opcionalnaya cepochka
  if(love?.pets?.name) {
    console.log(love.pets.name);
  }

  if(love && love.pets && love.pets.name) {
    console.log(love.pets.name);
  }

  //opcionalnaya cepochka

  let users = [
    {name: 'Alice', age: 2},
    {name:'Bob', age: 30},
  ];

  console.log(users[0]?.name); //Alice
  console.log(users[1]?.name); // Bob
  console.log(users[2]?.name); // undefined
  
  // primitivy (string i numbers) svoistva i metody

  let str = 'hello';
  let str2 = str.toUpperCase();

  console.log('str', str);
  console.log('str2', str2);
  console.log('str2', str2.toLowerCase());

  // isNaN (proveryaet chislo ili net); isFinite (beskonechno ili net)

  console.log(isNaN(NaN)); //true
  console.log(isNaN(2));  // false
  console.log(isFinite(1/0)); //false
  console.log(isFinite(123)); //true
  console.log(isFinite(Infinity)); //false

  //parseInt 

  let num = parseInt('123');

  console.log(num, typeof num);
  console.log(parseInt('asgjgj123')); //NaN
  console.log(parseInt('2565 asgjgj')); //2565
  console.log(parseInt('213.55')); // 213

  //parseFloat

  console.log(parseFloat('1.03')); // 1.03
  console.log(parseFloat('acfac1.03')); //NaN
  console.log(parseFloat('1.03sdbj')); // 1.03

  // toFixed

  let bigNumber = 143.212;

  console.log(bigNumber.toFixed(1)); //143.2
  console.log(bigNumber.toFixed(5)); //143.21200

  //Math.round

  console.log(Math.round(3.4)); //3
  console.log(Math.round(3.6)); //4 
  console.log(Math.round(3.5)); //4

  //Math.floor

  console.log(Math.floor(3.4)); //3
  console.log(Math.floor(3.6)); //3 
  console.log(Math.floor(3.5)); //3 

  // Math.trunc

  console.log(Math.trunc(3.4)); //3
  console.log(Math.trunc(3.6)); //3
  console.log(Math.trunc(3.5)); //3

  // Math.ceil 
  console.log(Math.ceil(3.0001)); //4 
  console.log(Math.ceil(3.4)); //4
  console.log(Math.ceil(3.6)); //4
  console.log(Math.ceil(4.9)); //5





  

  
