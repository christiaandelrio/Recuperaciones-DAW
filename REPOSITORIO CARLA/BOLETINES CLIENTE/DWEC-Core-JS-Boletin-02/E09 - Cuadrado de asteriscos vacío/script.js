const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
const parrafo     = document.getElementById('parrafo1');
const entrada     = document.getElementById('entrada1');   

botonEnviar.addEventListener('click', dibujarCuadrado);
botonReset.addEventListener('click', borrarCuadrado);



function dibujarCuadrado() {
  
    const numero = Number(entrada.value);
    parrafo.innerText = '';
    //Validamos los datos:
    if ( numero >= 1 && numero <= 20) {
        for (let fila = 1; fila <= numero; fila++) {
            //Pintamos el contorno de asteriscos
            for (let columna = 1; columna <= numero; columna++) {
                if ( fila    == 1 || fila    == numero ||
                     columna == 1 || columna == numero) {
                    parrafo.innerText += '*';
                } else {
                    //El interior lo pintamos vacío
                    parrafo.innerText += '\u00a0';
                }
            }
            //Por cada vez que se itere, saltamos una línea
            parrafo.innerText += '\n';
        }
        entrada.focus();
    } else {
        alert("Por favor, introduce un número comprendido entre 1 y 20, ambos incluidos");
    }
}

function borrarCuadrado() {
    parrafo.innerText = '';
}