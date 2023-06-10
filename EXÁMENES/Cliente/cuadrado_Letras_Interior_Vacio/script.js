const botonEnviar = document.getElementById("botonEnviar");
const botonReset = document.getElementById("botonReset");
const parrafo = document.getElementById('parrafo1');
const entrada = document.getElementById('entrada1');

botonEnviar.addEventListener('click', dibujarCuadrado);
botonReset.addEventListener('click', borrarCuadrado);


function dibujarCuadrado() {

    const frase = entrada.value;
    const formatoFrase = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
    parrafo.innerText = '';

    if (!formatoFrase.test(frase)) {
        alert("La frase no cumple el formato requerido");
    } else {

        let cadena = frase.replace(/\s/g, '');
        
        let numero1 = cadena.length + 1
        let numero = Math.floor(numero1 / 4 + 1);

        let saltoLinea = '\n';
        let espacio2 = '\u00a0';
        let pos = 0;


        for (let fila = 1; fila <= numero; fila++) {
            for (let columna = 1; columna <= numero; columna++) {
                if ( (pos<cadena.length) && (fila == 1 || fila == numero ||
                    columna == 1 || columna == numero) ) {
                    parrafo.innerText += cadena[pos++] + espacio2.repeat(2);
                } else {
                    parrafo.innerText += espacio2.repeat(3);
                }
            }
            parrafo.innerText += saltoLinea.repeat(1);
        }
        entrada.focus();
    }
}


function borrarCuadrado() {
    parrafo.innerText = '';
}