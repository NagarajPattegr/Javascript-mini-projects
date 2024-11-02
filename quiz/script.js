const questionAnswer = [
    {
        q: "Who is father of nation ?",
        option: [
            { text: "Shivaji", correct: false },
            { text: "Neharu", correct: false },
            { text: "Gandhiji", correct: true },
            { text: "Bose", correct: false }
        ],
    },
    {
        q: "What is national fruit of India",
        option: [
            { text: "Mango", correct: true },
            { text: "Apple", correct: false },
            { text: "Grapes", correct: false },
            { text: "Banana", correct: false }
        ],
    },
    {
        q: "Who is father of nevy ?",
        option: [
            { text: "Bose", correct: false },
            { text: "Neharu", correct: false },
            { text: "Gandhiji", correct: false },
            { text: "Shivaji", correct: true },
        ]
    }
];
let questionIndex = 0;
const questionFeild = document.querySelector("#question");
const submit = document.querySelector("#submit");
const buttons = document.querySelector("#buttons")
let answered_question = 0
let total_quetion = questionAnswer.length
let wrongQuestion = 0

submit.addEventListener("click", () => {
    if (submit.value == 'Start') {
        questionFeild.innerHTML = questionAnswer[questionIndex].q
        questionAnswer[questionIndex].option.forEach(option => {
            let button = document.createElement("button")
            button.setAttribute("class", "option")
            button.innerText = option.text
            button.classList.add(option.correct)
            buttons.appendChild(button)
        })
        submit.value = "submit"
        submit.innerHTML = "Next"
        selectOption()
        questionIndex++
    }
    else if(questionIndex==questionAnswer.length){
        buttons.innerHTML=`Total question = ${total_quetion}<br>Answered questions = ${answered_question}<br>Correct answered question = ${total_quetion-wrongQuestion}`
        submit.remove()
        questionFeild.innerText='Result'
    }
    else {
        readyState()
        questionFeild.innerHTML = questionAnswer[questionIndex].q
        questionAnswer[questionIndex].option.forEach(option => {
            let button = document.createElement("button")
            button.setAttribute("class", "option")
            button.innerText = option.text
            button.classList.add(option.correct)
            buttons.appendChild(button)
        })
        submit.value = "submit"
        submit.innerHTML = "Next"
        selectOption()
        questionIndex++
    }
})

function selectOption() {
    const option = document.querySelectorAll(".option");
    option.forEach((btn) => {
        btn.addEventListener("click", () => {
            answered_question++
            if (btn.classList.contains("false")) {
                btn.classList.add("False")
                let og_option = document.querySelector(".true")
                og_option.style.backgroundColor = "rgba(81, 230, 81, 0.753)";
                option.forEach(val => { val.disabled = true })
                wrongQuestion++
            }
            else {
                let og_option = document.querySelector(".true")
                og_option.style.backgroundColor = "rgba(81, 230, 81, 0.753)";
                option.forEach(val => { val.disabled = true })
            }
        }
        )
    })
    console.log("Exit")
}

function readyState(){
    const option = document.querySelectorAll(".option");
    option.forEach((val)=>[
        val.remove()
    ])
}