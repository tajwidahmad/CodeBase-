//? var a = 10;
//! duplicte values can be implemented again and again like var a=12 && var a=12 && this variable created with var is stored in window itself;

//?const t = "Tajwid Ahmad";
//! const keyword remains all the same...

//*initilaize -> giving first value to a variable
//!~ primitive data types->
// let name ="Tajwid ahmad";
// console.log(typeof(name));
//  let n = 100;
//  console.log(typeof(n));
//  let b;
//  console.log(typeof(b));
//  let sym = Symbol("hello");
//  console.log(typeof(sym));

//? Refrences 
// let a =[10,20,30,"hello",9.8];
//? objects
// let student ={
//     name:"Stephen",
//     Regd:174,
//     roll: 78
// };


//?loops
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// for(let i=1 ;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let i=1;
// while(i<15){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++;
// }
// while(true){
//     let num = Number(prompt("Enter a number"));
//     if(num%2==0){
//         console.log("yes this number is even");
//         break;
//     }
//     else{
//     console.log("Not a even number");
//     }
// }

//! Functions in javascript

// function sayhello(){
//     console.log("hello everyone...!!!")
// }
// let fnc = function(){
//     console.log("hello");
// };

// let name = prompt("please enter your name");
// function who_is_calling(name){
//     console.log(`${name} is calling me....`)
// }
// who_is_calling(name);

//! Rest and Spread
// ?function add(...val){
// ?    console.log(val);
// ?}
// ?add(1,2,3,4,4,5,5,6,7,8,9);

//! Functions with return

// function num_a(first_one(val)){
//     return val;
// }

// function first_one(){
//     console.log("hey!! am the first one...");
//     return val;
// }

// function say_hello(val){
//     val();
// }
// say_hello(function(){
//     console.log("Hello everyone... ");
// })

//!  Closures...
// function one(){
//     let name="Ahmmad"
//     return function two(){
//         let ans= name+"_Quraishi";
//         console.log(ans);
//     }
// }
// one()();//! ## way to run this type of closures.

// function scores(... val){
//     //? val array
//     total=0
//     for(let i=0;i<val.length;i++){
//         total+=val[i];
//     }
//     return total;

// }
// console.log(scores(10,12,14,18));

// let add = (a,b)=>{
//     return a+b;
// }
// add(5,4);

// let get_name=(val)=>{
//     console.log(`welcoming you ${val}`)
// }
// console.log(get_name("robin"));

//! Arrays

//? for each 
let arr = [10,45,3,2,4,58]
// arr.forEach(function(val){
//     console.log(val);
// })
//! map function -> must return {only if we need to make a new array/...}
let newarr = arr.map(function (val ){
    return val+20;
})


//???   $$$$$$$$$$$$$$$$$$$$  Reduce function ##########

let sum_arr=arr.reduce(function(accumulator,val){
    return accumulator+val;
},0);


//! Some function
let present = arr.some(function(val){
    return val===45;
} );

//? COPYING AN ARRAY NOT THE REFREMNCE

let arr3 = arr; //! every changes in any of them will reflect in both

let arr4 = [... arr]; //! every element is copied in a differnt array and they { arr and arr4 } are indepemdent of each other.


//! use of splice to add anything at any idx.
// let color = ["red","green","yellow"];
// color.splice(1,0,"pila");
// let names = ["zara","arjun","mira","bhavya"];
//! Objects.....
const students = {
    name:"Rahul",
    age:17,
    location:{
        name:"bhopal",
        pin:85457,
        address:{
            lat:32.7,
            lng:71.5,
        },
    },
};

const obj = {
    name:"Abdul",
    age :27,
    email:"abdul@gmail.com",
};
for(let key in obj){
    let pair = [key, obj[key]];
    console.log(pair)
}