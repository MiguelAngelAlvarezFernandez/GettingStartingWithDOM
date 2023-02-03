const button = document.querySelector("button")
const paragraph = document.querySelector("p")

function count() {
    paragraph.innerText += "Ouch!... "
}

button.addEventListener("click", count)
