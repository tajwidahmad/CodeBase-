// let h1 = document.getElementById("head1");
// console.dir(h1)

// let head1=document.querySelector("h1");
// let img  = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1791395802835-6260cd020ddc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D")
// let h1  = document.createElement("h1");
// h1.textContent = "Am created using createElement()";
// document.querySelector("body").prepend(h1);
// let p = document.createElement("p");
// p.textContent="Developers use global objects like document and window as entry points to any API.";
// document.querySelector("body").append(p);
// p.addEventListener("click",function(){
//     p.style.color="red";
//     p.style.backgroundColor="black";
// })
// let inp = document.createElement("input");
// inp.placeholder="Enter Your name"
// document.querySelector("body").prepend(inp);
// inp.addEventListener("input",function(data){
//     // console.log(data.data);
//     if(data.data!=null){
//         console.log(data.data);
//     }
// })
// let sel = document.querySelector("select");
// let device = document.querySelector("#Devices");
// sel.addEventListener("change",function(dets){
    // device.textContent = "Device Slected";
//     device.textContent = `${dets.target.value} is selected..`
// })
// let box = document.querySelector("#box");
// box.addEventListener("mouseover",function(){
//     box.style.backgroundColor="pink";
// })

let nm = document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    if(nm.value.length<=2){
        console.log("Enter more then 2 length name....")
    }
})
