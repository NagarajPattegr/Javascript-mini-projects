let val=document.querySelector(".val")
const box = document.getElementById("color_show")
const colors = document.querySelectorAll(".color")
colors.forEach((rgb) => {
    rgb.addEventListener("input", (e) => {
        e.preventDefault()
        let red = document.getElementById("red").value
        let green = document.getElementById("green").value
        let blue = document.getElementById("blue").value
        if (rgb.getAttribute("id") === 'red') {
            box.style.backgroundColor = `rgb(${rgb.value},${green},${blue})`
            val.innerHTML=`rgb(${rgb.value},${green},${blue})`
        }
        else if (rgb.getAttribute("id") === 'green') {
            box.style.backgroundColor = `rgb(${red},${rgb.value},${blue})`
             val.innerHTML=`rgb(${red},${rgb.value},${blue})`
        }
        else {
            box.style.backgroundColor = `rgb(${red},${green},${rgb.value})`
             val.innerHTML=`rgb(${red},${green},${rgb.value})`
        }
    })
})