const sillyButton = document.querySelector("button")
const paragraph = document.querySelector("p")

/**
 * As seguintes liñas crean una función con nome sillyCount.
 * Cando esta función sexa invocada no futuro executará
 * as instruccións almacenadas no bloque entre os signos {}.
 */
function sillyCount() {
    paragraph.innerText += "Ouch!... "
}

/**
 * A seguinte liña establece un "onclick" no elemento 
 * HTML almacenado na variable sillyButton.
 * Consegue que cando se faga click no botón, se poña en
 * marcha a funcion "sillyCount".
 */
sillyButton.addEventListener("click", sillyCount)
