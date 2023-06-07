let peticion;
const iniciar = () => {
    peticion = new XMLHttpRequest();
    peticion.open('GET', "https://opendata.aemet.es/centrodedescargas/feeds.rss"); 
    peticion.send();
    peticion.addEventListener("load", cargada);
}

const cargada = () => {
    let resultados = peticion.responseXML;

    let cds = peticion.responseXML.documentElement.getElementsByTagName("CD");
    resultados += '<ul>';
    for (let i = 0; i < cds.length; i++) {
        resultados += `<li><b>CD nº ${i + 1}</b><ul>`;
        resultados += `<li><b>Título:</b> ${cds[i].getElementsByTagName('TITLE')[0].innerHTML}</li>`;
        resultados += `<li><b>Artista:</b> ${cds[i].getElementsByTagName('ARTIST')[0].innerHTML}</li>`;
        resultados += `<li><b>País:</b> ${cds[i].getElementsByTagName('COUNTRY')[0].innerHTML}</li>`;
        resultados += `<li><b>Compania:</b> ${cds[i].getElementsByTagName('COMPANY')[0].innerHTML}</li>`;
        resultados += `<li><b>Precio:</b> ${cds[i].getElementsByTagName('PRICE')[0].innerHTML}</li>`;
        resultados += `<li><b>Año:</b> ${cds[i].getElementsByTagName('YEAR')[0].innerHTML}</li>`;
        resultados += `</li></ul>`;
    }
    resultados += '</ul>';

    document.getElementById("resultados").innerHTML = resultados;
}

window.addEventListener("load", iniciar, false);