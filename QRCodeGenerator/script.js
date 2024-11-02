const button = document.getElementById("generate")
button.addEventListener("click", () => {
    let inputed_value = document.querySelector("#inputArea").value
    if (inputed_value === '')
        alert("please enter link or URL")
    else
        generateQRCode(inputed_value)
})

  function generateQRCode(inputed_value) {
    restate()
    let img=document.createElement("img")
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+inputed_value
    document.getElementById("img").appendChild(img)
}

function restate(){
    document.getElementById("img").childNodes.forEach(node=>{
        node.remove()
    })
}