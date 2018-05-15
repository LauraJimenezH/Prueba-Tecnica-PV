$(document).ready(function() { // Función cuando ya haya cargado el docuemento.
  var array = [13, 42, 565, 1, 26, 75]; // Declarando array por defecto.

  $('.button-editar').click(function() { // Función para editar array.
    $('input').keydown(function() { // Función para validar que se escriba en el input.
      $('.button-guardar').prop('disabled', false); // Habilitando botón [Guardar].
    });
    $('.num-mayor-impar , .num-menor , .num-mayor-segundo').text(''); // Limpiando contenido.
    $('.indicacion').css('display', 'block'); // Mostrando indicación.
    $('input').val(''); // Limpiando input.
    if ($('input').css('display', 'block')) { // Condicional si se esta mostrando input.
      $('.divArray , .button-editar').css('display', 'none'); // Ocultando div de array y botón [Editar].
      $('.button-guardar').css('display', 'block'); // Mostrando botón [Guardar].
    }

    function dividirCadena(cadenaADividir, separador) { // Función para dividir string y convertir a array.
      var arrayDeCadenas = cadenaADividir.split(separador); // Dividir por coma y poner en array.
      array = arrayDeCadenas; // Variable array inicial remplazada por nuevo array.
    }

    $('.button-guardar').click(function() { // Función para guardar array editado.
      var cadena = $('input').val(); // Valor ingresado en input.
      dividirCadena(cadena, ','); // LLamando función, ingresando el valor del input.
      $('.array').text(array); // Mostrando array guardado.
      $('.indicacion , .button-guardar , input').css('display', 'none'); // Ocultando indicación, botón [Guardar] y input.
      $('.button-editar , .divArray').css('display', 'block'); // Mostrando botón [Editar] y div de array.
      $('.button-salida').prop('disabled', false); // Habilitando botón [Obtener].
    });
  });

  $('.button-salida').click(function() { // Función para obtener lo que nos piden.
    var numMax = 0; // Declarando variable en 0.
    var numMen = 9999999999; // Declarando variable en el número mas grande que quiera.
    var numMaxImp = 0; // Declarando variable en 0.
    var numMaxSecond = 0; // Declarando variable en 0.
    for (var i = 0; i < array.length; i++) { // Recorriendo array.
      if (numMaxImp < parseInt(array[i]) && parseInt(array[i]) % 2 === 1) { // Condicional para hallar número mayor e impar.
        numMaxImp = array[i]; // Número mayor impar.
      }
      if (numMen > parseInt(array[i])) { // Condicional para hallar número menor.
        numMen = array[i]; // Número menor.
      }
      if (numMax < parseInt(array[i])) { // Condicional para hallar número mayor y utilizarlo después.
        numMax = array[i]; // Número mayor.
      }
      if (i === array.length - 1) { // Condicional para saber si ya recorrio todo el array.
        var indexnumMax = array.indexOf(numMax); // Buscar el índice del número mayor hallado anteriormente.
        array.splice(indexnumMax, 1); // Eliminar del array al número mayor.
        for (var j = 0; j < array.length; j++) { // Recorrer el array ya modificado.
          if (numMaxSecond < parseInt(array[j])) { // condicional para hallar el segundo número mayor.
            numMaxSecond = array[j]; // Segundo número mayor.
          }
        }
      }
    }

    $('.num-mayor-impar').text(numMaxImp); // Mostrar número mayor impar.
    $('.num-menor').text(numMen); // Mostrar número menor.
    $('.num-mayor-segundo').text(numMaxSecond); // Mostrar segundo número mayor. 
    $('.button-salida').prop('disabled', true); // Desabilitar botón [Obtener].
  });
});