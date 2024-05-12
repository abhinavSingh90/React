let bt=document.querySelector("#bt");
// bt.onclick=(e)=>{
//     console.log("key pressed");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);

    

// }

bt.addEventListener("click",(e)=>{
    console.log("clicked");
    console.log(e);

})
const handler =()=>{
    console.log("clllick");
};
bt.addEventListener("click",handler);
bt.removeEventListener("click",handler);