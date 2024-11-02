let expression = document.querySelector("#expression")
let btn = document.getElementsByClassName("btn")
const btn_list = Array.from(btn);
let val = ""
btn_list.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        if (button.value === "clear"){
            expression.value = ''
            val=''
        }
        else if (button.value === '*') {
            button.value='X'
            val += button.value
            expression.value = val
        }
        else if (button.value ==='cut') {
            val = String(expression.value).slice(0,-1)
            expression.value = val
        }
        else if(isNaN(button.value) && isNaN(String(expression.value)[String(expression.value).length-1])){

        }
        else if(button.value==="="){
            val=eval(String(expression.value).replaceAll("X","*"))
            expression.value=val
        }
        else {
            val += button.value
            expression.value = val
        }
    })
})