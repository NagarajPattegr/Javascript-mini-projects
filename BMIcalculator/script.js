const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector(".result")
    if (weight === '' || height === '' || isNaN(height) || isNaN(weight))
        alert("Enter valid value")
    else {
        result.innerText = (weight / (Math.pow(height, 2)/1000)).toFixed(2);
    }
})