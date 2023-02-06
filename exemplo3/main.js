let entradaDeTexto = document.querySelector("input")
let paragrafoParaAmosarOResultado = document.querySelector("p")

function cambiaOContidoDoParagrafo() {
    const contidoDaEntradaDeTexto = entradaDeTexto.value
    const novoTextoAAmosar = contidoDaEntradaDeTexto + " y tal..."
    paragrafoParaAmosarOResultado.innerText = novoTextoAAmosar
}

entradaDeTexto.addEventListener("input", cambiaOContidoDoParagrafo)

/**
 * O evento "input" acontece cada vez que cambia o valor
 * dun elemento de formulario.
 */
