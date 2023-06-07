const parrafo  = document.getElementById("salida");

parrafo.innerText = "A\u00a0\u00a0A+3\u00a0\u00a0A+6\u00a0\u00a0A+9\n\n";
//Establecemos el bucle entre 7 y 35
for (let i = 7; i <=35; i +=7) {
    //Si el número es menor de 10 añadimos un espacio al número, sino no
    parrafo.innerText += `${i < 10 ? "\u00a0" + i : i}\u00a0\u00a0${i+3}\u00a0\u00a0${i+6}\u00a0\u00a0\u00a0${i+9}\n`; 
}