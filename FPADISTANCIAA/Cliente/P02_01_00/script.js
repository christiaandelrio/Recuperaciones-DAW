let peticion;
const iniciar = () => {
   peticion = new XMLHttpRequest();
   peticion.onreadystatechange = infoEstado;
   peticion.open('GET', "http://127.0.0.1/DWEC/FPADISTANCIA/TEMA-07/P02_01_00/procesar.php?nombre=Bob&apellidos=Esponja"); 
   peticion.send();
   peticion.addEventListener("load", cargada);
}

const infoEstado = () => {
   document.getElementById("estadoXHR").innerHTML += "Estado XHR: " +  peticion.readyState + "<br>";
}

const cargada = () => {
   let informe = `<hr>responseText = ${peticion.responseText} <br><hr>
   responseXML = ${peticion.responseXML}<br><hr> 
   status = ${peticion.status}<br><hr> 
   statusText = ${peticion.statusText} `;

   document.getElementById("resultados").innerHTML = informe;
}

window.addEventListener("load", iniciar, false);

