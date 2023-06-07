//Botones
const botonEnviar=document.getElementById("botonEnviar");
const botonReset=document.getElementById("botonReset");
//Inputs
const pluvioMayor=document.getElementById("pluvioMayor");
const pluvioActual=document.getElementById("pluvioActual");
const resultado=document.getElementById("resultado");
//Evento para recoger datos y mostrar resultado
botonEnviar.addEventListener('click',(evento)=>{
    if(pluvioMayor.value=='' || pluvioActual.value==''){
        alert("Por favor, complete todos los campos");
    } else{
        const actual = Number(pluvioActual.value);
        const mayor = Number(pluvioMayor.value);
        if(actual>mayor){
            resultado.textContent="la pluviosidad del año actual es mayor que la más alta";
        } else{
            resultado.textContent="la pluviosidad del año actual es menor que la más alta";
        }
    }
});
//Evento para limpiar datos y resultado
botonReset.addEventListener('click', limpiarEntradas);
//funcion para limpiar datos y resultados
function limpiarEntradas(){
    pluvioMayor.value='';
    pluvioActual.value='';
    resultado.innerHTML="&nbsp";
    pluvioMayor.focus();
}