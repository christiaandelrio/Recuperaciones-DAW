const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
const numeroHTML  = document.getElementById("numero");
const salida      = document.getElementById("salida");

botonEnviar.addEventListener('click', () => {
    const numero = Number(numeroHTML.value);
    //Validamos el número introducido:
    if ( numero < 1 || numero > 100 ) {
        alert("El número debe estar comprendido entre 1 y 100, ambos incluídos");
        numeroHTML.value = '';
        numeroHTML.focus();
    } else {
        salida.innerText = '';
        //Recorremos los números del 1 al 100
        for (let i = 1; i <=100; i++) {
            //Si el número es 100, no debajos un espacio delante
            salida.innerText += i < 100 ? " " : "";
            //Si el número es múltiplos de 9 fijamos las salidas con asterisco
            salida.innerText +=  (i % numero === 0) ? (i < 100 ? " *" : "  *") : (i < 10 ? " " + i : i);
            //Añadimos un espacio entre cada número
            salida.innerText += " ";
            //Cada vez que llegamos a un múltiplo de 10, saltamos una línea
            salida.innerText += ( i % 10 ) === 0 ? "\n" : "";
        }
    }
} );

botonReset.addEventListener('click', () => {
    salida.innerText = '';
    numeroHTML.value = '';
    numeroHTML.focus();
} );




