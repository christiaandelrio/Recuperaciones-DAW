const botonEnviar = document.getElementById("enviar");
const botonReset = document.getElementById("reset");
const resultado = document.getElementById('resultado');
const entrada = document.getElementById('frase');

botonEnviar.addEventListener('click', mostrarPalindromo);
botonReset.addEventListener('click', borrarPalindromo);

function mostrarPalindromo() {
    const frase = entrada.value;
    const formatoFrase = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
    resultado.innerText = '';

    if (!formatoFrase.test(frase)) {
        alert ("El formato de la frase no es el correcto");
    } else {
        let fraseReves = frase.split('').reverse().join('');
        resultado.innerText += '\n';
        resultado.innerText += `Escrita al revés: ${fraseReves}`;
        let palindromo = (fraseReves == frase) ? "Sí" : "No";
        resultado.innerText += '\n';
        resultado.innerText += `Es un palíndrimo: ${palindromo}`;
    }
}

function borrarPalindromo() {
    resultado.innerText = '';
    entrada.value = '';
}