const botonDoContador = document.querySelector("button")
const paragrafoDoContador = document.querySelector("p")

function incrementaOContador() {
    // parseInt: intenta convertir un string nun número sen decimais
    const numeroEnContador = parseInt(paragrafoDoContador.innerText)
    const contadorIncrementado = numeroEnContador + 1
    paragrafoDoContador.innerText = contadorIncrementado
}

botonDoContador.addEventListener("click", incrementaOContador)

/**
 * As liñas 4 a 9 crean una función con nome incrementaOContador.
 * As instruccións almacenadas nesa función (liñas 5 e 8)
 * non se executarán secuencialmente despois das liñas 1 ó 4,
 * senon que quedarán postargadas ó momento en que empreguemos
 * esa función, empregando o seu nome, nalgún momento no futuro.
 * 
 * A liña 9 establece que cando se produza un click no obxecto 
 * do DOM HTML almacenado na variable botonDoContador (almacénase
 * na liña 1) se poña en marcha a funcion "incrementaOContador".
 */