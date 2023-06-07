/*
 *  Función que calcula la 
 *
 * 
*/
function resolverEcuacionSegundoGrado(a, b, c) {
    //Calculamos el discriminante; si éste es negativo, la ecuación no tiene solución: NaN
    const discriminante = (b * b) - (4 * a * c);

    if (  discriminante < 0.0 ) {
        return [NaN, NaN];
    } else {
        //Las soluciones se devuelven en un arras: solucion[0] y solucion[1]
        return [ (-b + Math.sqrt(discriminante))/(2*a),(-b - Math.sqrt(discriminante))/(2*a) ];
    }
}
//Botones
const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
//Inputs
const a           = document.getElementById("coeficienteA");
const b           = document.getElementById("coeficienteB");
const c           = document.getElementById("coeficienteC");
//Salidas
const parrafo     = document.getElementById("parrafo");
const salida      = document.getElementById("salida");
//Tripletas
const tripletas   = document.querySelector("pre");

salida.style.display = "none";
salida.style.fontFamily = "monospace";

botonEnviar.addEventListener('click', () => {
    //Comprobamos si tienen solución o no los números introducidos
    let solucion = resolverEcuacionSegundoGrado(Number(a.value), Number(b.value), Number(c.value));
    parrafo.innerText = " raíz 1 = " + solucion[0] + "; raíz 2 = " + solucion[1] + "\n\n";
    //Bloqueamos las soluciones en pantalla
    salida.style.display = "block";
    //Calculamos las tripletas aleatorias
    for (let i = 0; i < 10; i++) {
        const coefA = (Math.random() < 0.5 ? -1: 1) * ( Math.floor(Math.random() * 20) + 1);
        const coefB = (Math.random() < 0.5 ? -1: 1) * ( Math.floor(Math.random() * 20) + 1);
        const coefC = (Math.random() < 0.5 ? -1: 1) * ( Math.floor(Math.random() * 20) + 1);
        let solucion = resolverEcuacionSegundoGrado(coefA, coefB, coefC);
        parrafo.innerText += `Solución (${coefA},${coefB},${coefC}): raíz 1 = ${solucion[0]}  ; raíz 2 = ${solucion[1]} \n`;
    }
});

botonReset.addEventListener('click', () => {
    a.value = '';
    b.value = '';
    c.value = '';
    parrafo.innerText = '';
    salida.style.display = "none";
    a.focus();
});