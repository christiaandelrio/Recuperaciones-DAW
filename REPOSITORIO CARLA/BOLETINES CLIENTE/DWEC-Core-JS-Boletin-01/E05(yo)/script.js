//Botones
const enviar=document.getElementById("botonEnviar");
const borrar=document.getElementById("botonBorrar");
//Inputs
const segundos=document.getElementById("segundos");
const resultado=document.getElementById("resultado");
//Evento recoger datos y calcular resultado
enviar.addEventListener('click', (evento)=>{
    if(segundos.value==''){
        alert("Por favor, introduzca los segundos");
    } else {
        const total=Number(segundos.value);
        const horas=total/3600;
        let restante= horas - Math.floor(horas);
        const minutos= restante*60;
        const seg= minutos - Math.floor(minutos);
        resultado.textContent=`Han pasado ${Math.floor(horas)} horas:${Math.floor(minutos)} minutos:${Math.round(seg)} segundos`;
    }
})
//Evento limpiar datos y resultado
borrar.addEventListener('click', limpiarEntradas);

function limpiarEntradas(){
    segundos.value='';
    resultado.innerHTML="&nbsp";
    segundos.focus();
}