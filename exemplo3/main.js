let input = document.querySelector("input")
let paragraph = document.querySelector("p")

function changeParagraphContent() {
    paragraph.innerText = input.value + "y tal..."
}

input.addEventListener("input", changeParagraphContent)
