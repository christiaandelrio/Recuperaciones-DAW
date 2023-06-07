//Botones
const enviar=document.getElementById("botonEnviar");
const borrar=document.getElementById("botonReset");
//Inputs
const num=document.getElementById("num");
const resultado=document.getElementById("resultado");
//Eventos
enviar.addEventListener('click', (evento)=>{
    if(num.value==''){
        alert("Por favor, introduzca un número");
    }else{
        const numero=Number(num.value);
        if(numero%2==0){
            resultado.textContent="El número es par";
        }else{
            resultado.textContent="El número es impar";
        }
    }
});

borrar.addEventListener('click', limpiarEntradas);

function limpiarEntradas(){
    num.value='';
    resultado.innerHTML="&nbsp";
    num.focus();
}