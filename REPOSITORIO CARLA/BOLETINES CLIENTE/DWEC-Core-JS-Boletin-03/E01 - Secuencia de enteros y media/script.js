//Botones
const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");

const cajaNumeroEnteros         = document.getElementById('numeroEnteros'); 
const etiquetaSolicitarCantidad = document.getElementById('solicitarCantidad'); 
const entradaEnteros            = document.querySelector('.entradaEnteros'); 
const etiquetaNumero            = document.getElementById("numero");
const cajaIntroEntero           = document.getElementById("introEntero");
const parrafoMedia              = document.getElementById('media');

// variables globales
let suma          = 0;
let contador      = 1;
let numeroEnteros = 0;

entradaEnteros.style.display = "none";
parrafoMedia.style.display   = "none";
//Eventos
botonEnviar.addEventListener('click', procesarEnteros);
botonReset.addEventListener('click', limpiarEntrada);

//Funciones
function procesarEnteros() {
    //Validamos la entrada de datos
    if ( cajaNumeroEnteros.value !== "" && cajaNumeroEnteros.value != 0) {
        numeroEnteros = Math.floor(Number(cajaNumeroEnteros.value));
        //Modificamos el color de la entrada de enteros
        etiquetaSolicitarCantidad.style.color = "black";
        parrafoMedia.style.display   = "none";
        //Bloqueamos el número para que esté siempre visible
        entradaEnteros.style.display  = "block";
        etiquetaNumero.innerHTML = "Introduzca el número " + contador + "/" + numeroEnteros + ":";
        //Al hacer click, paramos esta función y llamamos a la de recoger los número, y viceversa
        botonEnviar.removeEventListener('click', procesarEnteros);
        botonEnviar.addEventListener('click', recogerEnteros);
    } else {
        etiquetaSolicitarCantidad.style.color = "red";
        parrafoMedia.style.display = "none";
    }
}

function recogerEnteros() {
    //Sumamos cada número que insertamos y aumentamos el contador en 1
    suma += Math.floor(Number(cajaIntroEntero.value));
    contador++;
    //Cuando llegamos al máximo de dígitos establecido calculamos la media
    if ( contador > numeroEnteros) {
        entradaEnteros.style.display  = "none";
        parrafoMedia.style.display = "block";
        parrafoMedia.textContent = "La media es: " + (suma / numeroEnteros);
        cajaNumeroEnteros.focus();
        //Una vez calculada la media, inicializamos la suma y el contador
        suma = 0;
        contador = 1;
          //Al hacer click, paramos esta función y llamamos a la de recoger los número, y viceversa
        botonEnviar.removeEventListener('click', recogerEnteros);
        botonEnviar.addEventListener('click', procesarEnteros);
    } else {
        etiquetaNumero.innerHTML = "Introduzca el número " + contador + "/" + numeroEnteros + ":";
    }

}

function limpiarEntrada() {
    parrafoMedia.style.display    = "none";
    entradaEnteros.style.display  = "none";
    etiquetaSolicitarCantidad.style.color = "black";
    contador = 1;
    suma     = 0;
    botonEnviar.removeEventListener('click', recogerEnteros);
    botonEnviar.addEventListener('click', procesarEnteros);
}