//Definición de variables
const frase = document.getElementById('frase');
const enviar = document.getElementById('enviar');
const reset = document.getElementById('reset');
const actualizar = document.getElementById('actualizar');
const resultados = document.getElementById('resultados');

//Quitar espacios a una frase e imprimirla

// function imprimirSinEspacios(){
//     let procesado = frase.value.replace(/\s+/g, ''); //Esta expresion regular reemplaza los espacios

//     resultados.innerText = procesado;
// }

// enviar.addEventListener('click',imprimirSinEspacios);
// document.createElement('br');
//Imprimir un rombo de asteriscos hueco

function limpiarEntradas(){ //Función para vaciar el contenedor de resultados
    resultados.innerText = '';
}

function romboAsteriscos(){
    let fraseSinEspacios = frase.value.replace(/\s+/g, ''); //Obtengo la frase introducida por el usuario sin espacios

    for(let i=0;i<=fraseSinEspacios.length-1;i++){
        for(let j=0;j<=i;j++){
            if(j==0 || j==i){
                resultados.innerText += fraseSinEspacios[i];
            }else{
                resultados.innerText += '\u00a0';
            }
        }

        resultados.innerText += '\u00a0';
        resultados.innerText += '\n'
    }

    for(let i=fraseSinEspacios.length-1;i>=0;i--){
        for(let j=0;j<=i;j++){
            if(j==0 || j==i){
                resultados.innerText += fraseSinEspacios[i];
            }else{
                resultados.innerText += '\u00a0';
            }
        }

        resultados.innerText += '\u00a0';
        resultados.innerText += '\n'
    }
}

enviar.addEventListener('click',romboAsteriscos);
reset.addEventListener('click',limpiarEntradas);

//Parte temperatura
function actualizarTemperatura(){
    $.ajax({
        type: "GET",//utiliza get
        url: "https://api.openweathermap.org/data/2.5/weather?&lat=42.264799151433&lon=-8.765128490705925&units=metric&lang=es&appid=8a2423b28d69b2f14a25bca771904482",//url de la api
        dataType: "json",//tipo de datos de la respuesta
        success: (respuesta)=>{
            console.log(respuesta);

            let temperatura = respuesta.weather[0].description;

            $('#temperatura').append(temperatura);

            console.log(respuesta.status)
        },
        
        error: function(){
            console.error("Error al cargar la respuesta.");
        }
    });
}

actualizar.addEventListener('click',actualizarTemperatura);