const parrafo  = document.getElementById("salida");
const nbs = "\u00a0";
//Determinamos una variable de ancho para que todas las columnas estén bien alineadas
const ancho = 7; 
//Creamos una función de espaciado para alinear
function espaciar(numero) {
    return nbs.repeat(ancho - numero.toString().length);
}
//EL bucle es hasta 10
for (let i = 1; i <=10; i++) {
    parrafo.innerText += `${i}${espaciar(i)}${i**2}${espaciar(i**2 )}${i**3}${espaciar(i**3)}${i**4}\n`; 
}