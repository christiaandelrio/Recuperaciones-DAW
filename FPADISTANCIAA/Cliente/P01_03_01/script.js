let peticion;
const iniciar = () => {
   peticion = new XMLHttpRequest();
   peticion.open('GET', "http://127.0.0.1/DWEC/FPADISTANCIA/TEMA-07/P01_03_01/fecha.php"); 
   peticion.send();
   peticion.addEventListener("load", cargada);
   document.getElementById("estado").classList = [ 'cargando' ];
   document.getElementById("estado").innerText = "Cargando...";
}

const cargada = () => {
   document.getElementById("resultados").innerText = peticion.responseText;
   document.getElementById("estado").classList = [ 'cargada' ];
   document.getElementById("estado").innerText = "Cargada.";
}

window.addEventListener("load", iniciar, false);

// cada 4 segundos (4000ms) recargamos
setInterval(iniciar, 4000);

