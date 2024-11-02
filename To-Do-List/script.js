const button = document.querySelector("#add")
let list_items = document.querySelector("#lists")

function getTime() {
    return new Date().toLocaleString("en-IN")
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    let work = document.querySelector("#input").value;
    if (!(work === '')) {
        let li = document.createElement("li")
        li.innerHTML = `<div class="work">${work}</div><hr><br><span id="time">${getTime()}</span><span id="strike">&#9989</span><span id="delete">&#10060</span>`
        list_items.appendChild(li)
        document.querySelector("#input").value=''
        localStorage.setItem("data",list_items.innerHTML)
    }
})

list_items.addEventListener("click", (e) => {
    if (e.target.getAttribute('id') === 'strike')
        e.target.parentElement.style.textDecoration = "line-through"
    else if (e.target.getAttribute("id") == "delete")
        e.target.parentElement.remove()
    localStorage.setItem("data",list_items.innerHTML)
})

setInterval(() => {
    document.getElementById("clock").innerHTML = new Date().toLocaleTimeString()
}, 1000);

document.addEventListener("DOMContentLoaded",()=>{
    const data=localStorage.getItem("data")
    if(data)
        list_items.innerHTML=data
})
