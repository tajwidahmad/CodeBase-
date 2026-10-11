// let choice = prompt("Enter your choice..");
// switch (choice){
//     case "1" :
//         let age = prompt("Enter your age...")
//         if(age>18){
//             console.log("You are Eligible to vote ")
//         }
//         else{
//             console.log("You are Not Eligible to vote ")
//         }
//         break;
// }
// function my(){
//     let say = "hello";
//     return function mine(){
//         console.log(say+"everyone");
//     }
// }
let arr = [99,43,101,47,0];
//? sorting array....
// let s = arr.sort(function(a,b){
//     return a-b;
// });
// console.log(s);
// arr.forEach(function(val){
//     console.log(val);
// })
// let newarr = arr.map(function(val){
//     return val+100;
// })
// console.log(newarr);
// console.log(newarr.sort(function(a,b){
//     return a-b;
// }))
// let anarr= arr.filter(function(val){
//     return val<50;
// })
// console.log(anarr);
let anarr=[...arr];
console.log(anarr);
anarr.pop();
console.log(anarr);
console.log(arr);

