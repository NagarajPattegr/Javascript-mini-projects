const random_Color = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// document.querySelector('body').style.backgroundColor=random_Color()

let fun;
document.querySelector("#btn").addEventListener("click", () => {
    if(!fun){
    fun = setInterval(() => {
        document.querySelector('body').style.backgroundColor = random_Color()
    }, 3000)
}
})
document.querySelector("#btn2").addEventListener("click", () => {
    clearInterval(fun)
    fun=null
})