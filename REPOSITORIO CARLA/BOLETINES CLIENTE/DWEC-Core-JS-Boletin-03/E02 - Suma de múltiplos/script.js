const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
const tope        = document.getElementById("tope");
const salida      = document.getElementById("salida");

botonEnviar.addEventListener('click', () => {
    const numeroTope = Number(tope.value);
    //Validar número tope
    if ( numeroTope <= 0 ) {
        alert("El número debe ser mayor o igual a 1");
        tope.value = '';
        tope.focus();
    } else {
        //Inicializamos la suma a 0
        let suma = 0;
        //El bucle crece en escalones de 7
        for(let i = 7; i <= numeroTope; i += 7) {
            //Se van sumando los múltiplos de 7 en cada interación
            suma +=i;
        }

        salida.innerText = `La suma de todos los múltiplos de 7 de 1 hasta ${numeroTope} es: ${suma}`;
    }
} );

botonReset.addEventListener('click', () => {
    salida.innerText = '';
} );