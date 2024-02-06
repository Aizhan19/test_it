let str = "how old are you?";

console.log(str);
console.log(str[0]); //mozhem izvlekat' bukvy, no ne menyat'
console.log(str[5]);

str = "i love you";
console.log(str.indexOf("you"));
console.log(str.indexOf("your")); // -1 esli ne nahodit vozvrawaet -1

let str2 = "purple animal";

console.log(str2.lastIndexOf("a")); // 11
console.log(str2.startsWith("p")); // true
console.log(str2.endsWith("p")); // false
console.log(str2); //purple animal
console.log(str2.length); // 13

// let data = prompt('enter your email');
// console.log(data);
// console.log(data.trim()); // udalyaet probely do i posle

let lorem = "Hello java";
let lorem2 = lorem.replace("java", "world"); // change one word
console.log(lorem);
console.log(lorem2);

let lorem3 = "Hello java, java is the best";
let lorem4 = lorem3.replaceAll("java", "world"); // change all words 'Java'
console.log(lorem3);
console.log(lorem4);

let lorem5 = "Hello java, java is the best";
console.log(lorem5);
let splited = lorem5.split(" "); //poluchili massiv (arrays) po kazhdomu slovu
console.log("splited", splited);

let splited2 = lorem5.split(""); //poluchili massiv (arrays) po kazhdomu simvolu
console.log("splited", splited2);

let splited4 = lorem5.split("java"); //poluchili massiv (arrays) bez slov java
console.log("splited", splited4);

let joined = splited4.join("script"); // join
console.log("joined", joined);

// includes
let example = "hello world";
console.log(example.includes("hello")); //true
console.log(example.includes("java")); //false

//mozhno ukazat s kakoi pozicii iskat
console.log(example.includes("hello", 0)); // true
console.log(example.includes("hello", 5)); // false

// massivy, arrays (spisok kakih to dannyh) [1,5,6,8,8]

let names = ["malika", "aruzhan", "áiman", "marina"];

for (let index = 0; index < names.length; index++) {
  let name = names[index];

  if (name.startsWith("m")) console.log("name", name);
}

console.log(names.length);

// massivy mogut soderzhat' ob'ekty

let users = [
  { name: "user1", email: "aizhan@gmail.com" },
  { name: "user2", email: "aizhan2@gmail.com" },
  { name: "user3", email: "aizhan3@gmail.com" },
];

// arrays (massivy na rus yazyke)

function getLastElementOfArray(arr) {
  return arr[arr.length - 1];
}

let students = ["Moldir", "Aidos", "Malika", "Ilias"];
console.log(students);
console.log("last one: ", getLastElementOfArray(students));

// push() method
students.push("magzhan"); // method arrays, dabavit novyi element v konec
console.log(students);
console.log("last one: ", getLastElementOfArray(students));

console.log(students.length); // uznat dlinu

students.push("limbo", "jhon");
console.log(students);
console.log(students.length);
console.log("last element of array: ", students[students.length - 1]);

// pop() method

console.log(students);
students.pop(); //delete last element
console.log("st", students); // "Moldir", "Aidos", "Malika", "Ilias", "magzhan", "limbo"
console.log(students.length);
let deleted1 = students.pop();
let deleted2 = students.pop();
console.log("deleted1", deleted1); //limbo
console.log("deleted2", deleted2); // magzhan
console.log(students); //  "Moldir", "Aidos", "Malika", "Ilias"
console.log(students.length); // 4

// unshift() method

students.unshift("Tima"); // dobavlyaet element v nachale
console.log(students); // [ "Tima", "Moldir", "Aidos", "Malika", "Ilias" ]

// shift method
students.shift(); // udalyaet element v nachale
console.log(students); //  [ "Moldir", "Aidos", "Malika", "Ilias" ]

students.unshift("Tima", "kuzya"); // dobavlyaet element v nachale mozhno neskolko
console.log(students); //  [ "Tima", "kuzya", "Moldir", "Aidos", "Malika", "Ilias" ]

// splice() method mozhno udalat elementy ukazyvaya gde imenno s pomowú argumentov

let students1 = ["moldir", "aidos", "malika", "ilias"];
console.log("vse 4", students1); //  [ "moldir", "aidos", "malika", "ilias" ]

students1.splice(1, 1); // aidos
console.log("vse 3", students1); //  [ "moldir", "malika", "ilias" ]

students1.splice(1, 2); // aidos, malika
console.log("odin", students1); //  [ "moldir" ]

// splice() mozhno takzhe dobavlyat elementty
console.log(students1);
["moldir"];
students1.splice(0, 0, "Rauan");
console.log("dop", students1); // [ "Rauan", "moldir" ]

students1.splice(2, 0, "Rima");
console.log("dop2", students1); // [ "Rauan", "moldir", "Rima" ]

students1.splice(2, 0, "Roma");
console.log("dop3", students1); // [ "Rauan", "moldir", "Roma", "Rima" ]

students1.splice(1, 2, "vaga", "dasha");
console.log("dop4", students1); // [ "Rauan", "vaga", "dasha", "Rima" ]

// otrcatelnye znacheniya

let arr2 = [1, 2, 5];
arr2.splice(-1, 0, 3, 4);

console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// slice() (vyrezaet nuzhnye elementy ne izmenyaya sam massiv)

let letters = ["h", "e", "l", "l", "o"];
let sliced = letters.slice(2, 4);
console.log("letters", letters); //  [ "h", "e", "l", "l", "o" ]
console.log("sliced letters:", sliced); // sliced letters: [ "l", "l" ]

let sliced2 = letters.slice(3); //  [ "h", "e", "l", "l", "o" ]
console.log(sliced2); // [ "l", "o" ]

let sliced3 = letters.slice(-3); //  [ "h", "e", "l", "l", "o" ]
console.log(sliced3); //  [ "l", "l", "o" ]

// concat() method // obédinyat massivy mozhno
let children = ["ira", "olya", "misha"];
let tearches = ["saha", "mira", "mika"];
let childrenCopy = [...children];
console.log("copy", childrenCopy); // [ "ira", "olya", "misha" ]

let people = children.concat(tearches);
console.log(people); // [ "ira", "olya", "misha", "saha", "mira", "mika" ]

let people1 = [...children, ...tearches]; // ... - spread operator
console.log(people1); // [ "ira", "olya", "misha", "saha", "mira", "mika" ]

let arr = [1, 2];

// sozdat massiv iz arr i [3,4]
console.log(arr.concat([3, 4])); //  [ 1, 2, 3, 4 ]

// sozdat massiv iz arr i [3,4] i [5,6]
console.log(arr.concat([3, 4], [5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// sozdat massiv iz arr i [3,4], potom dobavit znacheniya 5 i 6
console.log(arr.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]

// forEach()
console.log(students); // [ "Tima", "kuzya", "Moldir", "Aidos", "Malika", "Ilias" ]
students.forEach((el) => {
  console.log(el);
});

console.log(students);
function printUstudents(students) {
  console.log("users", students);
}
students.forEach(printUstudents);

students.forEach((el, index) => {
  console.log(`user: ${el}, index: ${index}`);
});

// indexOf()

let userss = ["moldir", "aidos", "malika", "ilias", "aidos", "malika"];

console.log(userss.indexOf("aidos")); //1
console.log(userss.indexOf("ilias")); //3

//lastIndexOf()
console.log(userss.lastIndexOf("aidos")); //4
console.log(userss.lastIndexOf("malika")); // 5
console.log(userss.lastIndexOf("magzhan")); //-1

//includes()
console.log(userss.includes("magzhan")); //false
console.log(userss.includes("malika")); // true

// find(), findIndex(), findLastIndex()

let users3 = [
  { name: "moldir" },
  { name: "aidos" },
  { name: "malika" },
  { name: "ilias" },
  { name: "Aidos" },
  { name: "Malika" },
  { name: "" },
];

function findByName2(arr, name) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    let user = arr[i];
    if (user.name === name) {
      result = user;
      break;
    }
  }
  return result;
}

console.log(findByName2(users3, "Malika"));

function findByNameFromLast(arr, name) {
  for (i = arr.length - 1; i > 0; i--) {
    let user = arr[i];
    if (user.name === name) {
      result = user;
      break;
    }
  }
  return result;
}

console.log(findByNameFromLast(users3, "Malika"));

// find()

function proVersion(arr, neededName) {
  let result;
  result = arr.find((el) => {
    return el.name === neededName;
  });
  return result;
}

console.log(proVersion(users3, "Malika"));

// filter() method

let numbers = [1,23,4,7,7,8,7,4];
function findCountOfNumbersInArray(arr, num) {
 
let result;
  result = arr.filter((el /*, index, arr*/) => {
   // console.log(el, num);
   return el ===num

  })
  return result;

}
console.log(findCountOfNumbersInArray(numbers, 7)); 
console.log(findCountOfNumbersInArray(numbers, 8)); 

let users5 = [
  {name:'Moldir', surname: 'surname', email: 'email.@gmail.com', age: 18, gender: 'female'},
  {name:'Ardak', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Malika', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'female'},
  {name:'Ilias', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'female'},
  {name:'Aidos', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Jhonny', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Tima', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Aigul', surname: 'surname', email: 'email.@gmail.com', age: 19, gender: 'female'}
]

console.log('males: ', users5.filter(el => el.gender === 'male'));

function findFemale(arr) {
  let result = '';
  result = arr.filter((el) => {
    let prop = el.gender === 'female' & el.age <20;
    return prop

  })
  return result
 }
console.log('females:', findFemale(users5));



function findFemale2(arr, gender, age) {
  let result = '';
  result = arr.filter((el) => {
    let prop = el.gender === gender & el.age <age;
    return prop

  })
  return result
 }
console.log('females:', findFemale2(users5, 'male', 30));

// Map() method

let users6 = [
  {name:'Moldir', surname: 'surname', email: 'email.@gmail.com', age: 18, gender: 'female'},
  {name:'Ardak', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Malika', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'female'},
  {name:'Ilias', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'female'},
  {name:'Aidos', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Jhonny', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Tima', surname: 'surname', email: 'email.@gmail.com', age: 24, gender: 'male'},
  {name:'Aigul', surname: 'surname', email: 'email.@gmail.com', age: 19, gender: 'female'}
]

let userNames = users6.map(user => {
  return user.name
})

let userNamesUpper = userNames.map(name => name.toUpperCase());
console.log('userNames: ', userNames)
console.log('userNamesUpper: ', userNamesUpper);

let doubleNums = [1,2,3,6,8,9].map(num=> num*2);
console.log('doubleNums: ', doubleNums);

let users25 = users6.map(user => {
  return {
    firstName: users6.name,
    lastName: users6.surname,
    fullName: user.name + ' ' + user.surname
  }
})

console.log(users25);

// sort() method

let numbers10 = [5,1,7,8,9];
console.log(numbers10.sort());

// reduce() method

let numbers5 = [1,2,3,4,5,6,7];

function sumOfNumbers(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum = num+1;
  })

  return sum;
}
 console.log(sumOfNumbers(numbers5)); //8 


 let users99 = {
  name: 'Moldir',
  surname: 'moldirovna',
  email: 'email@gmail.com',
  age:8,
  gender: 'female',
 };

 let keys = Object.keys(users99);
 let values = Object.values(users99);
 let entries = Object.entries(users99);

 console.log(users99);
 console.log(keys);
 console.log(values);
 console.log(entries);
 keys.forEach(k=> console.log(users99[k]));

 entries.forEach(en => {
  console.log('key is', en[0], 'value is', en[1]);
 })


 // destruktutizaciya
 let {name, surname} = users99;
 console.log(name);
 console.log(surname);