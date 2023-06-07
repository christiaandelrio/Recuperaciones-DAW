const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
const cajaNumeroBinario    = document.getElementById("numeroBinario");
const parrafoNumeroDecimal = document.getElementById("numeroDecimal");

botonEnviar.addEventListener('click', (evento) => {
    //Validamos que el campo del número no esté vacío:
    if ( cajaNumeroBinario.value == '') {
      alert("Introduzca un número binario, por favor");
    } else {
        let numeroBinario = cajaNumeroBinario.value;
        let numeroDecimal = 0;
        //Validamos el formato de entrada del número(que no tenga más de 5 dígitos)
        if (numeroBinario.length > 5) {
            alert("El número introducido tiene más de 5 dígitos");
            return;
        } else {
            //Recorremos el string como si fuese un array para comprobar que se compone de 0s o 1s
            for(let i = (numeroBinario.length - 1); i >= 0; i--) {
                if ( numeroBinario[i] > 1) {
                    alert("El número introducido tiene en su posición " + ((numeroBinario.length - 1)- i) + " el caracter inválido " + numeroBinario[i]);
                    return;
                } else {
                    numeroDecimal += (numeroBinario[i] * (1<<((numeroBinario.length - 1) - i)));
                }
            }
             parrafoNumeroDecimal.innerHTML = 'El número decimal correspondiente es:&nbsp;' + numeroDecimal;
         }
    }
} );

botonReset.addEventListener('click', limpiarEntradas);

function limpiarEntradas( ) {
    parrafoNumeroDecimal.innerHTML = 'El número decimal correspondiente es:&nbsp;';
    cajaNumeroBinario.focus();
}
