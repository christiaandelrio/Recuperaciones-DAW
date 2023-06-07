$( () => {
    $.ajax({
      url: 'http://127.0.0.1/DWEC/FPADISTANCIA/TEMA-07/P03_02_00/fecha.php',
      type: 'GET',
      async: true,
      success: (respuesta) => {
              $("#resultados").text(respuesta);
              $("#estado").toggleClass('cargada');
              $("#estado").text("Cargada.");
      }
    });
  });