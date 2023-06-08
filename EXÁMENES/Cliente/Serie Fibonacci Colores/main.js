//Definimos los elementos HTML
const num = document.getElementById('num');
const enviar = document.getElementById('enviar');
const color = document.getElementById('color');
const salida = document.getElementById('salida');
////Función para calcular el siguiente término de la serie de Fibonacci a partir de un término dado
function calcularFibonacci (termino) {
    if ( termino < 2 ) {
        return termino;
    } else {
        return  calcularFibonacci(termino - 1) + calcularFibonacci(termino - 2);
    }
}

//Función para imprimir el siguiente término de la serie
function imprimirFibonacci(numero){ 
    let fibonacci = calcularFibonacci(numero);

    return fibonacci;
}

//Función para cambiar el color de los términos
// Generar un color aleatorio en formato RGB
function obtenerColorAleatorio() {
    var rojo = Math.floor(Math.random() * 256);     // Valor aleatorio entre 0 y 255
    var verde = Math.floor(Math.random() * 256);    // Valor aleatorio entre 0 y 255
    var azul = Math.floor(Math.random() * 256);     // Valor aleatorio entre 0 y 255
  
    var color = "rgb(" + rojo + ", " + verde + ", " + azul + ")";
    return color;
}
  
function cambiarColor(){
    
    let elementosP = document.getElementsByTagName('p');

    for (let i = 0; i < elementosP.length; i++) {
      let colorAleatorio = obtenerColorAleatorio();
      elementosP[i].style.color = colorAleatorio;
    }
}

//Añadimos eventos
enviar.addEventListener('click', ()=>{
    let numero=Number(num.value);
    let contador = 0;

    if(num.value == ''){
        alert("Por favor, introduzca un número");
        num.focus();
    } else if (numero<1 || numero>20){
        alert("Por favor, introduzca un número comprendido entre 1 y 20");
        num.focus();
    } else {
        for (let i = 0; i < numero; i++) {
            salida.innerHTML += '<p>'+imprimirFibonacci(contador)+'</p>';
            contador++;
        } 
    }
});

color.addEventListener('click',cambiarColor);