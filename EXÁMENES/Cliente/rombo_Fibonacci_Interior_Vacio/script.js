const botonEnviar = document.getElementById("enviar");
const botonReset = document.getElementById("reset");
const parrafo = document.getElementById('parrafo1');
const entrada = document.getElementById('numero');

botonEnviar.addEventListener('click', dibujarRombo);
botonReset.addEventListener('click', borrarRombo);

function calcularFibonacci (termino) {
    if (termino < 2) {
        return termino;
    } else {
        return calcularFibonacci(termino - 1) + calcularFibonacci(termino - 2);
    }
}

function imprimirFibonacci (numero) {
    let espacio = " ";
    let punto = '.';
    let fibonacci = calcularFibonacci(numero);

    if (fibonacci < 10) {
        return punto.repeat(2) + fibonacci + espacio.repeat(3);
    } else if (fibonacci < 100) {
        return punto.repeat(1) + fibonacci + espacio.repeat(3);
    } else {
        return punto.repeat(0) + fibonacci + espacio.repeat(3);
    }
}


function dibujarRombo() {
    const numero = Number(entrada.value);
    let contador = 0;
    let saltoLinea = '\n';
    let espacio2 = '\u00a0';

    if (numero < 1 || numero > 8 || numero % 2 == 0) {
        alert("El número debe ser impar y estar comprendido entre 1 y 8");

    } else {
        parrafo.innerText = '';

        const medio = Math.floor(numero / 2 + 1);

        for (let fila = 1; fila <= medio; fila++) {
            for (let columna = 1; columna <= numero; columna++) {
                if (((columna === medio - fila + 1) || (columna === medio + fila - 1))) {
                    parrafo.innerText += imprimirFibonacci(contador);
                    contador++;
                } else {
                    parrafo.innerText += espacio2.repeat(5)
                }
            }
            parrafo.innerText += saltoLinea.repeat(3);
        }

        for (let fila = medio - 1; fila >= 1; fila--) {
            for (let columna = 1; columna <= numero; columna++) {
                if (((columna === medio - fila + 1) || (columna === medio + fila - 1))) {
                    parrafo.innerText += imprimirFibonacci(contador);
                    contador++;
                } else {
                    parrafo.innerText += espacio2.repeat(5);
                }
            }

            parrafo.innerText += saltoLinea.repeat(3);
        }

    }

}

function borrarRombo() {
    parrafo.innerText = '';
    
}
