const time=document.querySelector("#time");

setInterval(()=>{
    const date=new Date();
   time.innerText=(date.toLocaleTimeString())
},1000)