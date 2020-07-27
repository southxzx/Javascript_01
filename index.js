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

const circle = {
    radius : 1,
    location : {
        x: 1,
        y: 1
    },
    isVisible : true,
    draw : function(){
        console.log('DRAW');
    }
};
// circle.draw(); // Method
// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log('DRAW');
//         }
//     };
// }
// const circle = createCircle(1);
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('DRAW');
    }
}
// const circle = new Circle(1);
// console.log(circle);
// let obj = {value: 10};
// function increaseValue(obj){
//     obj.value++;
// }
// increaseValue(obj);
// console.log(obj);
// for (let x in circle){
//     console.log(x, circle[x]);
// };
// const another = Object.assign({},circle);
// const another = {...circle};
// console.log(another);
// let name = 'NAM';
// const message = 
// `I'm a little
// 'monster' ${name}`;

const now = new Date();
const date1 = new Date('July 27 2020 08:12');
const date2 = new Date(2020, 07, 27, 08, 13);
now.setFullYear(2021);

//Ex1
// const address = {
//     street: 'Lê Văn Việt',
//     city: 'HCMC',
//     zipCode: 70000
// };
// function showAddress(address){
//     const result =
//     `Street: ${address['street']}
//     City: ${address['city']}
//     Zip Code: ${address['zipCode']}`;
//     console.log(result);    
// }
// showAddress(address);

//Ex2
//Factory Function
// function address(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode
//     };
// }
// let createAddress = address('Lê Văn Việt','HCMC',70000);
//Constructor Function
function Address(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    // this.showAddress= function(){
    //     console.log('Street:', this.street),
    //     console.log('City', this.city),
    //     console.log('Zip Code', this.zipcode)
    // }
}
// let createAddress = new Address('Lê Văn Việt','HCMC',70000);
// console.log(createAddress);

//Ex3
// let createAddress = new Address('Lê Văn Việt','HCMC',70000);
// let createAddress2 = new Address('Lê Văn Việt', 'HCMC', 70000);
// function areEqual(createAddress,createAddress2){
//     return createAddress.street === createAddress2.street &&
//     createAddress.city === createAddress2.city &&
//     createAddress.zipcode === createAddress2.zipcode
// }
// function areSame(createAddress,createAddress2){
//     if (createAddress === createAddress2) return true;
//     else return false;
// }
// const x1 = areEqual(createAddress,createAddress2);
// const x2 = areSame(createAddress,createAddress2);
// console.log(x1,x2);

//Ex4
// const blogPost = {
//     title: '4:30 AM',
//     body: 'This is an amazing book',
//     author: 'XiaJun',
//     views: 1330,
//     comments: [
//         {author: 'Nam', body: 'Great!!!'},
//         {author: 'Anda', body: 'WOW!!!'}
//     ],
//     isLive: true
// }
// console.log(blogPost);

//Ex5
// function Blog(title,body,author){
//     this.title = title,
//     this.body = body,
//     this.author = author,
//     this.views = 0,
//     this.comments = [],
//     this.isLive = false,
//     this.isPublished = function(){
//         if(isLive) console.log('This book was published');
//         else console.log('This book was not published');
//     }
// }

//Ex6