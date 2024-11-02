const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

// buttons.forEach((button)=>{
//     button.addEventListener("click",()=>{
//        body.style.backgroundColor=(button.getAttribute("id"))
//     })
// })

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.style.backgroundColor)
        body.style.backgroundColor=e.target.id;
    })
})