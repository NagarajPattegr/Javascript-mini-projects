const number = parseInt(Math.random() * 100 + 1)
const input_val = document.querySelector("#guess")
const btn = document.querySelector("#btn")
const attempts = document.querySelector("#atm")
const guesses = document.querySelector("#Guesses");
const res = document.querySelector("#res")
const btn2 = document.createElement("button")
let playGame = true
let life = 0
const p = document.createElement("p")
btn2.innerHTML = 'Restart'
btn2.setAttribute("class", "button")
p.style.fontSize = "2rem";

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const guess = parseInt(input_val.value)
    validateNumber(guess)
})

function validateNumber(guess) {
    if (playGame) {
        if (isNaN(guess))
            alert("Enter number")
        else if (guess < 1 || guess > 100)
            alert("Enter number between 1-100")
        else if (life === 10) {
            endGame()
            return
        }
        else {
            life += 1
            checkNumber(guess)
        }
    }
}

function checkNumber(guess) {
    if (guess == number) {
        displayMessage("Number is equal You win the game", guess)
        endGame()
    }
    else if (guess > number)
        displayMessage("Number is too high", guess)
    else
        displayMessage("Number is too low", guess)
}

function displayMessage(message, guess) {
    attempts.innerText = life
    guesses.innerHTML += `${guess} `
    p.innerText = message
    res.appendChild(p)
}

function endGame() {
    playGame = false
    input_val.value = ''
    input_val.setAttribute("disabled", "")
    p.innerText = "Game ended"
    res.appendChild(p)
    res.appendChild(btn2)
    btn2.addEventListener("click", (e) => {
        e.preventDefault()
        startGame()
    })
}

function startGame() {
    playGame = true
    input_val.removeAttribute("disabled")
    btn2.remove()
    p.innerText = ''
    life = 0
    attempts.innerHTML = ''
    guesses.innerHTML = ''
}