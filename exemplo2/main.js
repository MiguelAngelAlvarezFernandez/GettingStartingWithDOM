const botonsTipoRadio = document.querySelectorAll("input[type='radio']")
const imaxeGrande = document.querySelector("img.imaxeGrandota")

function cambiarOrixeDaImaxeGrandota(event) {
//Nota May: El event de arriba hace referencia al evento CLICK que activa la función
    let obxetoDOMOrixinarioDoEvento = event.target
    let novaOrixeDaImaxe = obxetoDOMOrixinarioDoEvento.value // Valor do obxeto orixe do evento
    imaxeGrande.src = novaOrixeDaImaxe
}

// botonsTipoRadio é "algo" parecido a un array. [0] e [1] refiren o primeiro e segundo elemento deste "array".
botonsTipoRadio[0].addEventListener("click", cambiarOrixeDaImaxeGrandota)
botonsTipoRadio[1].addEventListener("click", cambiarOrixeDaImaxeGrandota)
