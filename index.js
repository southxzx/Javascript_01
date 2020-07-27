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
//...

// let numbers2 = [1,2,3,1,4];
let numbers = [];
// console.log(numbers.indexOf('a'));
// console.log(numbers.lastIndexOf(1) !== -1);
// console.log(numbers.includes(1));
// Holding Shift+Alt+Down to duplicate line
// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'}
// ];
// const course =  courses.findIndex(course => course.name === 'a');
// console.log(course);

numbers.push(); //Add to the end of an array
numbers.pop();

numbers.unshift(); //Add to the beginning of an array
numbers.shift();

// numbers.splice(startNumber, amountElementWantToDel/0, numberWantToAdd); 
//Add to the an array at somewhere in the middle
// console.log(numbers2.splice(2,2));

//Emptying an array we have 4 solutions below
// numbers2 = [];
// numbers2.length = 0;
// numbers2.splice(0,numbers2.length);
// while(numbers2.length > 0){ // Dont Reccommend
//     numbers2.pop();
// }

let first = [1,2,3];
let second = [4,5,6];
// let combined = first.concat(second);
let combined = [...first,...second];
// let slice = combined.slice(2,4); // Beginning - Ending
// console.log(combined);
// console.log(slice);
// numbers2.forEach((numbers2, index) => console.log(index,numbers2));
// let numbers2 = [1,2,3,1,4];
// let joined = numbers2.join(',');
// console.log(joined)
// let message = 'Tôi là Nam Đại Nhân';
// let splited = message.split(' ');
// console.log(splited);
// console.log(splited.join(' '));

//SORT
// let numbers2 = [1,2,3,1,4,-5];
// console.log(numbers2.sort());
// console.log(numbers2.reverse());
// const atLeastOnePositive = numbers2.some(value => value >= 0);

// const result = numbers2
//     .filter(value => value >= 0)
//     .map(n => ({value: n}))
//     .filter(x => x.value > 2)
//     .map(obj => obj.value);

// const item = numbers2.map(n => '<li>' + n + '</li>');
// const item2 = numbers2.map(n => ({value: n}));
// const html = '<ul>' + item.join('') + '</ul>';
// console.log(result);
// console.log(atLeastOnePositive);

// const courses = [
//     {id: 1, name: 'NodeJS'},
//     {id: 2, name: 'Javascript'}
// ];
// courses.sort(function(a,b){
//     let name1 = a.name.toLowerCase();
//     let name2 = b.name.toLowerCase();
//     if (name1 < name2) return -1;
//     if (name1 > name2) return 1;
//     return 0;
// })
// console.log(courses);

// let numbers2 = [1,2,3,1,4,-5];
// let sum = numbers2.reduce(function(s,currentValue){
//     return s + currentValue;
// },0);
// console.log(sum);

//EX1
// result = arrayFromRange(1,4);
// console.log(result);
function arrayFromRange(min,max){
    let numbers = [];
    numbers.push(min);
    while (numbers[numbers.length-1] < max){
        min++;
        numbers.push(min);
    };
    return numbers;
}

//EX2
// let numbers2 = [1,2,3,1,4,-5];
function includes(array, searchElement){
    for (let i=0;i<array.length;i++){
        if (i === searchElement) return true;
    };
    return false;
};
// let result = includes(numbers2,7);
// console.log(result);

//EX3
function except(array, included){
    let newArray = array;
    for (let j=0;j<included.length;j++){ 
            newArray = newArray.filter(v => v != included[j]);
    };
    return newArray;
}
// const output = except(numbers2,[]);
// console.log(output);

//EX4
// let numbers2 = [1,2,3,4];
function move(array,index,offset){
    if (offset+index >= array.length || offset+index < 0){
        console.error('Invalid Offset');
    }
    else{
        let newArray = [...array];
        let x = newArray.splice(index,1)[0];
        newArray.splice(index+offset,0,x);
        return newArray;
    }
}
// let result = move(numbers2,1,-1);
// console.log(result);

//EX5
// let numbers2 = [1,2,3,4,1];
function countOccurences(array,searchElement){
    let newArray = [];
    for (let x of array){
        if (x === searchElement){
            newArray.push(x);
        }
    }
    let result = newArray.reduce(function(accumulator,currentvalue){
        return accumulator + currentvalue;
    },0);
    return result;
}
// const count = countOccurences(numbers2,1);
// console.log(count);

//EX6
// let numbers2 = [1,2,3,4,1];
function getMax(array){
    // let result = array[0];
    // for (let x in array){
    //     if (x > result) result = x;
    // }
    // return result;
    let result = array.reduce(function(accumulator,currentValue){
        return (currentValue > accumulator) ? currentValue : accumulator;
    },array[0]);
    return result;
}
// const max = getMax(numbers2);
// console.log(max);

//EX7
const movie = [
    { title:'a', year:2018, rating:4.5},
    { title:'b', year:2018, rating:4.7},
    { title:'c', year:2018, rating:3.0},
    { title:'d', year:2017, rating:4.5},
    { title:'e', year:2019, rating:4.2}
];
const result = movie
    .filter(m => m.year >= 2018 && m.rating > 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(t => t.title);
// console.log(result);
// let newMovie = [];
// let newMovie2 = [];
// for (let x of movie){
//     if (x['year'] === 2018 && x['rating'] > 4){
//         newMovie.push(x);
//     }
// }
// for (let x of newMovie){
//     let flag = newMovie[0]['rating'];
//     if (x['rating'] > flag){
//         newMovie2.unshift(x);
//     }
//     else{
//         newMovie2.push(x);
//     }
// }
// for (let x of newMovie2){
//     console.log(x['title']);
// }
