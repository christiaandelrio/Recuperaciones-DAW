let peticion;
const iniciar = () => {
    peticion = new XMLHttpRequest();
    peticion.open('GET', "http://127.0.0.1/DWEC/FPADISTANCIA/TEMA-07/P02_04_00/datosjson.php"); 
    peticion.send();
    peticion.addEventListener("load", cargada);
}

const cargada = () => {
    let resultados = '';
    let cds = JSON.parse(peticion.responseText);
    resultados += '<ul>';
    for (let i = 0; i < cds.length; i++) {
            resultados += `<li><b>CD nº ${i + 1}</b><ul>`;
            resultados += `<li><b>Título:</b> ${cds[i].title}</li>`;
            resultados += `<li><b>Artista:</b> ${cds[i].artist}</li>`;
            resultados += `<li><b>País:</b> ${cds[i].country}</li>`;
            resultados += `<li><b>Compania:</b> ${cds[i].company}</li>`;
            resultados += `<li><b>Precio:</b> ${cds[i].price}</li>`;
            resultados += `<li><b>Año:</b> ${cds[i].year}</li>`;
            resultados += `</li></ul>`;
    }
    resultados += '</ul>';

    document.getElementById("resultados").innerHTML = resultados;
}

window.addEventListener("load", iniciar, false);