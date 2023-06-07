$().ready(() => {
    $("#mitabla tr:nth-child(even)").addClass("colorido");
});

$("#mitabla").click(function() {
    $(this).fadeTo("slow", 0.25).fadeTo("slow", 1).fadeTo("slow", 0.1).hide(1000);
    // $(this).fadeOut(1000);
});

function refrescar() {
    $("#mitabla").show(1000);
    $("#mitabla").fadeTo("slow", 1);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
// Función para generar un color RGB aleatorio
function aleatorioRGB() {
    return `rgb(${aleatorio(0, 255)},${aleatorio(0, 255)},${aleatorio(0, 255)})`;
}

function cambiarColor() {
   $("#mitabla tr:nth-child(odd)").css("background-color", aleatorioRGB());
   // $("#mitabla tr:nth-child(" + aleatorio(1,5) +")").css("background-color", aleatorioRGB());

}

setInterval(refrescar, 3000);
// setInterval(cambiarColor, 1000);
