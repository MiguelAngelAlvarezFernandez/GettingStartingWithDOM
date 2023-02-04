const inputs = document.querySelectorAll("input")
const bigImage = document.querySelector("img.bigPicture")

function changeImageSrc(event) {
    /**
     * Na seguinte liña, target é o elemento HTML no que
     * se produxo o evento que disparou esta función.
     * Para o noso caso, os elementos que poderán disparar
     * a función serán calquera dos dous radio buttons (mira
     * as liñas 16 e 17).
     */
    const clickedInput = event.target
    bigImage.src = clickedInput.value
}

inputs[0].addEventListener("click", changeImageSrc)
inputs[1].addEventListener("click", changeImageSrc)
