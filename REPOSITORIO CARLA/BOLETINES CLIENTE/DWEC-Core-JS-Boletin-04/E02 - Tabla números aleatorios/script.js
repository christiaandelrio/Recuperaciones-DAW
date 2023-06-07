const parrafo     = document.getElementById('parrafo1');
parrafo.innerHTML = '';
//Math.radon() se multiplica por el número máximo + 1
let numeroFilas      = Math.floor(Math.random() * 100 + 1);
let primerNumeroFila = Math.floor(Math.random() *  50 + 1);
//El máximo de filas es numeroFilas, por lo que el bucle finalizaría en él
for (let fila = 1; fila <= numeroFilas; fila++) {
    parrafo.innerHTML += primerNumeroFila + ' ';
    //El máximo de elementos por fila es primerNumeroFila
    for (let elementoFila = 1; elementoFila < primerNumeroFila; elementoFila++) {
        parrafo.innerHTML += Math.floor(Math.random() * 100 + 1) + ' ';
    }
    //AL finalizar cada fila, se produce un salto de línea
    parrafo.innerHTML += '<br>';
    //Por cada fila se calcula un número máximo de elementos por fila
    primerNumeroFila = Math.floor(Math.random() *  50 + 1);
}
