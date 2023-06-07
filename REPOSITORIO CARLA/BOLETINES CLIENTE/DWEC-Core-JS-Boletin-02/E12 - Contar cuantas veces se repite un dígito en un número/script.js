const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
const cajaNumero  = document.getElementById("numero");
const parrafo     = document.getElementById("salida");

botonEnviar.addEventListener('click', (evento) => {
    // Comprobar formato entrada:
    parrafo.innerHTML = 'Número de veces que aparece el dígito 9:&nbsp;';
    // Comprobar formato entrada:
    let numero = Number(cajaNumero.value);
    if ( cajaNumero.value == '' || numero < 1 || numero > Number.MAX_SAFE_INTEGER) {
        alert(`Introduzca un número entero positivo (<${Number.MAX_SAFE_INTEGER}), por favor`);
        cajaNumero.focus();
    } else {
        //Inicializamos el contador
        let contador = 0;
        while ( numero > 0 ) {
            //Si en cada iteración, al dividir el número entre 10, existe algún 9
            if ( numero % 10 === 9 ) {
                contador++;
            }
            numero = (numero / 10)|0;
        }
        parrafo.innerText += contador;
    }
    
} );

botonReset.addEventListener('click', limpiarEntradas);

function limpiarEntradas( ) {
    parrafo.innerHTML = '';
    cajaNumero.value = '';
    cajaNumero.focus();
}
