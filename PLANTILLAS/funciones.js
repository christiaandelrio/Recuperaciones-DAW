/////////////////////////////////////////FUNCIONES//////////////////////////////////////////////////
///FUNCIÓN PARA GENERAR UNA TABLA DE NxN CELDAS
function generarTabla() {
    let tabla = document.createElement('table'); //Creamos el elemento tabla
    tabla.setAttribute('border', 1); //Le metemos un borde 
    tabla.setAttribute('id', 'tabla');
    tablero.appendChild(tabla);
    let num = Number(numero.value);
  
    for (let i = 0; i < num; i++) {
      tabla.appendChild(document.createElement('tr'));
      for (let j = 0; j < num; j++) {
        let celda = tabla.appendChild(document.createElement('td'));
        celda.setAttribute('width', '50px');
        celda.setAttribute('height', '50px'); //Asignamos un alto y ancho a las celdas
        //Aquí debajo metería un eventListener a cada celda creada si quiero hacer cosas como que se ejecute una función de pintar al hacerles click
        celda.innerHTML = 'dato';
      }
    }

    tabla.onmouseenter = function(event){ //Añadir un evento de cuando el ratón entra en la tabla
        let target = event.target;
        target.style.background = 'pink';
    }

    tabla.onmouseleave = function(event){ //Cuando sale de la tabla cambia de vuelta el background color a white
        let target = event.target;
        target.style.background = 'white';
    }
}

function esPalindromo(palabra) {
  // Eliminar los espacios en blanco y convertir a minúsculas
  palabra = palabra.replace(/\s/g, '').toLowerCase();

  // Verificar si la palabra es un palíndromo
  const longitud = palabra.length;
  for (let i = 0; i < longitud / 2; i++) {
    if (palabra[i] !== palabra[longitud - 1 - i]) {
      return false; // No es un palíndromo
    }
  }
  return true; // Es un palíndromo
}

// Ejemplo de uso
const palabra1 = 'Anita lava la tina';
console.log(esPalindromo(palabra1)); // Imprime true

const palabra2 = 'Hola mundo';
console.log(esPalindromo(palabra2)); // Imprime false