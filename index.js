// let people = {
//     name: 'Nam',
//     age: 21
// };
// people.name = 'Nam Đại Nhân';

// let selection = 'name';
// people[selection] = 'Nam 109';
// console.log(people);

// /* ARRAY */
// let selectedColor = ['red','blue'];
// selectedColor[2] = 'green';
// selectedColor[3] = 11;
// console.log(selectedColor.length);

/* FUNCTION */
// function greet(name, lastname){
//     console.log('Hello ' + name + ' ' + lastname);
// }
// function square(number){
//     return number*number;
// }
// console.log((square(2)))
// // greet('Nam', 'Dang');

/* OPERATORS */
let x = 3;
let y = 10;
// console.log(x+y);
// console.log(--x);
// console.log(x>=2);
// console.log ('1' === 1); // Same type and value
// console.log ('1' == 1); // Same value only
// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);
// let highInCOme = true;
// let goodCreditScore = true;
// let eligibleForLoan = highInCOme && goodCreditScore;
// let applicationRefused = !eligibleForLoan;
// console.log('Eligible', eligibleForLoan);
// console.log('Application Refused', applicationRefused);

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

/*Bitwise*/
//1 = 00000001
//2 = 00000010
//3 = 00000011
// console.log(1 | 2);
// Read: 00000100
// Read + Write: 00000110
// Read + Write + Execute: 00000111
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);
// let message = (myPermission & readPermission) ? 'yes' : 'no';
// console.log(message);

/*EXERCISE */
let a = 'red';
let b = 'blue';

let c = b;
b = a;
a = c;

// console.log(a);
// console.log(b);

/*CONTROL FLOW */
// let hour = 10;

// if (hour >= 6 && hour < 12){
//     console.log('Good morning');
// }
// else if (hour >= 12 && hour < 18){
//     console.log('Good afternoon');
// }
// else{
//     console.log('Good evening');
// }

// let role = undefined;
// switch (role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');
// }
// for (let i = 0; i<5 ; i++){
//     console.log('Hello', i);
// }
// let people = {
//     name: 'Nam',
//     age: 21
// };
// colors = ['red','blue','yellow']
// for (let key in people){
//     console.log(key, people[key]);
// }
// for (let key2 of colors){
//     console.log(key2);
// }
// function isLandScape(width, height){
//     if (width >= he)
// }
