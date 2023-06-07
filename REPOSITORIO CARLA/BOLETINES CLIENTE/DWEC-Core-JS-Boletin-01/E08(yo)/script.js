//Botones
const enviar=document.getElementById("botonEnviar");
const borrar=document.getElementById("botonReset");
//Inputs
const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const resultado=document.getElementById("resultado");
//Eventos
enviar.addEventListener('click', (evento)=>{
    if(num1.value=='' || num2.value==''){
        alert("Por favor, introduzca los dos números solicitados");
    }else{
        const numero1=Number(num1.value);
        const numero2=Number(num2.value);
        if(numero1%numero2==0){
            resultado.textContent=`El número ${numero1} es múltiplo de ${numero2}`;
        }else{
            resultado.textContent=`El número ${numero1} no es múltiplo de ${numero2}`;
        }
    }
});

borrar.addEventListener('click', limpiarEntradas);

function limpiarEntradas(){
    num1.value='';
    num2.value='';
    resultado.innerHTML="&nbsp";
    num1.focus();
}