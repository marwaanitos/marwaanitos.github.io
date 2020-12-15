// string, number, boolean, null

const name = 'john'; 
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;    
let z;

console.log(typeof rating);

/*Concatenation
console.log('My name is ' + name + 'I am ' + age + 'and I am 6.5 = ' + isCool)
 Template String (backticks instead of qoutes)
console.log(`my name is ${name}, I am ${age} years old kekw`);

const Hello = `my name is ${name} and I code and that = ${isCool}`;

console.log(Hello); */

/*
const Kekw = 'Hello World!';
console.log(`I cant code? ${Kekw}`); */

/* Split for database and search
const Curriculums = 'Technology, Computer Science, Mathematics, Sports';
console.log(Curriculums.split(', ')); */

// Arrays
const Fruits = ['Apple, Orange, Banana'];
Fruits[3] = 'Grapes';
Fruits.push('kiiwi');
Fruits.unshift('papaya');
Fruits.pop();
console.log(Fruits);
console.log(Fruits.indexOf('Oranges'));
