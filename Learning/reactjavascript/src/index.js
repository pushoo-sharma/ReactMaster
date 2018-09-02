// -----------------------------------------keyword
// //var within function
// //let within block
// //const within block "read - only cann't be reassigned"
// //var within function
// //let within block
// //const within block "read - only cann't be reassigned"
// function checkKeyword(){
//     for(var i = 1;i<=5;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// checkKeyword()
         
//  ---------------------------------------------object
// const person = {
//     name : "pushpak",
//     code : function(){},
//     dance(){}
// };

// //static
// person.code();
// person.name = '';

// //dynamic
// const target = 'name';
// person[target.value] = 'Jay';


// -----------------------------------------------this
// const person = {
//         name : "pushpak",
//         code : function(){
//             console.log(this);
//         },
// };  
// person.code();

// const referenece = person.code;
// console.log(referenece);
// referenece();


// -----------------------------------------------bind
// const person = {
//     name : "pushpak",
//     code : function(){
//         console.log(this);
//     },
// };  

// const functionAreObject = person.code.bind(person);
// //bind method will return a new instance of code function and set this point to perrson object
// functionAreObject();
// //output {name: "pushpak", code: ƒ}

// -----------------------------------------------fat Arrow
// const empl = [
//     {id : 1, isActive : true},
//     {id : 2, isActive : true},
//     {id : 3, isActive : false},
// ];

// const activeEmpl = empl.filter(function(emp){return emp.isActive});
// console.log(activeEmpl);
// //(2) [{…}, {…}]
// const activeempl = empl.filter( emp => emp.isActive );
// console.log(activeempl);
// //(2) [{…}, {…}]
// // same output

// -----------------------------------------------fat Arrow and this
// const person = {
//     name : "pushpak",
//     code (){
//         setTimeout(function(){
//             console.log(this);
//         },1000);
//     },
//     // code : function(){
//     //     console.log(this);
//     // }
// }
// person.code();
//{name: "pushpak", code: ƒ}

//After setTimeout

// person.code();

//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//Reason Callback function is not a part of any object
//so its not like code method in person object
//its a standalone function

//SO how can we have reference of person inside this callback person

// using self 
// const person = {
//     name : "pushpak",
//     code (){
//         var self = this;
//         setTimeout(function(){
//             console.log(self);
//         },1000);
//     },
// }

// person.code();
//{name: "pushpak", code: ƒ}

// but if we use this it will inherit this keyword ; so we even don' need this 

// const person = {
//     name : "pushpak",
//     code (){
//         setTimeout(() => {
//             console.log(this);
//         },1000);
//     },
// }

// person.code();
//{name: "pushpak", code: ƒ}


//this is not reset infact it is inhereted in which code is defined
//arrow function don't rebind with this keyword

//-------------------------------------------Map Function

// const learns = ['begin','inter','expert'];

// const print = learns.map(function(learn){
//     return <li>+learn+</li>;
// });
// console.log(print);
//const print = learns.map( learn => <li>+learn+</li>)
//const print = learns.map( learn => '<li>$(learn)</li>')

//---------------------------------------------Object Destructing
// const university = {
//     institute : 'Eng',
//     Branch : 'IT',
//     Enrollement : 'xxx069'
// };

// const institute = university.institute;
// const Branch = university.Branch;
// console.log(institute);
// //Eng(output)

// const {institute,Branch} = university;
// console.log(institute);
// //Eng(output)

// const {institute : i} = university;
// console.log(i);
//Eng (output)

//--------------------------------------------Spread operator 
// const first = [1,2,3];
// const second = [4,5,6];
// const combined = [...first,7,...second];
// // const combined = first.concat(second);
// console.log(combined);

// //can even be used with object
// const fist = {firstname : "pushpak"}
// const last = {lastname : "Sharma"}
// const name = {...first,middle : "Ashok",...last};
// console.log(name);

//------------------------------------------------Class
class Person{
    constructor(name){
        this.name = name;
    }
    code(){
        console.log("code");
    }
}

class Alien extends Person{
    constructor(name,play){
        super(name);
        this.play = play;
    }
}
var newAlien = new Alien("pushpak","CHESS");
console.log(newAlien.play);