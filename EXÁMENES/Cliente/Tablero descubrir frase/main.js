// DECLARACIÓN DE VARIABLES
const frase = document.getElementById('frase');
const dificultad = document.getElementById('dificultad');
const jugar = document.getElementById('jugar');
const limpiar = document.getElementById('limpiar');
const tablero = document.getElementById('tablero');
const divErrores = document.getElementById('errores');
let contador = document.getElementById('contador');
let intentos = document.getElementById('intentos');

///FUNCIÓN PARA GENERAR UNA TABLA DE NxN CELDAS
function generarTabla() {
  let tabla = document.createElement('table');
  tabla.setAttribute('border', 1);
  tabla.setAttribute('id', 'tabla');
  tablero.appendChild(tabla);
  let dificultadValor = Number(dificultad.value);

  for (let i = 0; i < dificultadValor; i++) {
    tabla.appendChild(document.createElement('tr'));
    for (let j = 0; j < dificultadValor; j++) {
      let celda = tabla.appendChild(document.createElement('td'));
      celda.setAttribute('width', '50px');
      celda.setAttribute('height', '50px');
      celda.addEventListener('click', pintarCeldas);
      celda.appendChild(document.createElement('p')); //Aquí tengo que meter un párrafo vacío en cada celda
    }
  }

  //FUNCIÓN PARA METER LETRAS EN CELDAS ALEATORIAS DE LA TABLA

  function letrasCeldas() {
    let celdas = document.getElementsByTagName('td');
    let fraseSinEspacios = frase.value.replace(/\s+/g, '');

    for (let i = 0; i < fraseSinEspacios.length; i++) {
      let numeroAleatorio = Math.floor(Math.random() * celdas.length);
      celdas[numeroAleatorio].innerHTML =
        '<p style="display:none">' + fraseSinEspacios[i] + '</p>'; //En la celda aleatoria que salga sustituyo el párrafo que tiene por uno que contenga la letra
    }
  }

  letrasCeldas();
}

function pintarCeldas(evento) {
  let cel = evento.target;
  let p = cel.getElementsByTagName('p')[0];
  let letrasDescubiertas = 0;

  if (evento.type === 'click' && p.textContent == '') {
    cel.style.backgroundColor = 'grey';
    //p.style.display = 'block';
    numeroIntentos();
  }else{
    cel.style.backgroundColor = 'green';
    p.style.display = 'block';

    letrasDescubiertas++;
  }

  
} 

//Comprobar intentos y letras restantes
let cont = 0;

function numeroIntentos(){
    cont = cont + 1;
    contador.textContent = "Llevas "+cont+" intentos para descubrir la frase";
}

//FUNCIÓN PARA VALIDAR LAS ENTRADAS
function validarEntradas() {
  let patron = /^[A-Za-z\s]{1,50}$/; // Permitir letras y espacios en la frase
  let dificultadValor = Number(dificultad.value); //Los input por defecto devuelven tipo texto así que transformamos la dificultad a número

  divErrores.innerHTML = ''; // Vaciar el contenido de divErrores

  if (
    frase.value === '' ||
    frase.value.length > 50 ||
    !frase.value.match(patron)
  ) {
    divErrores.innerHTML +=
      'La frase no puede estar vacía o ser superior a 50 caracteres y debe contener letras<br>';
    return false;
  }
  if (
    dificultadValor === '' ||
    dificultadValor < 10 ||
    dificultadValor > 50
  ) {
    divErrores.innerHTML +=
      'La dificultad no puede estar vacía y debe tener un valor entre 10 y 50<br>';
    return false;
  }

  return true; //En caso de que no pare por algún error en las validaciones devolverá true
}

//FUNCIÓN PARA LIMPIAR EL TABLERO
function limpiarTabla() {
  tablero.innerHTML = '';
  divErrores.innerHTML = '';
}

//Asociamos eventos
jugar.addEventListener('click', () => {
  if (validarEntradas() === true) {
    generarTabla();

  }
});
limpiar.addEventListener('click', limpiarTabla);



//console.log(tabla.getElementsByTagName('td'));

//En las validaciones mejor primero la condición que no se cumple, así ya no sigue

// //window.addEventListener('load',limpiarTabla);
// if(!condicion){
//     //avisa de que no se cumple
//     return false
//     }
    
//    /^[A-Za-z]{1,50}$/;  

//^ → comienza por
//$ → acaba 

