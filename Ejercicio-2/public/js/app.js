getAjax(); // Ejecutamos función.

var container = document.getElementById('content'); // Declaramos variable.
var modalContent = document.getElementById('modal-title'); // Declaramos variable.
var img = document.getElementById('imgg'); // Declaramos variable.
var homeworld = ''; // Declaramos variable en vacío.

function getAjax() { // Creamos la función que hará la petición ajax.
  var cantPersonajes = 30; // Cantidad de personajes.
  for (let i = 1; i < cantPersonajes; i++) { // Recorremos la cantidad de personajes que queremos.
    $.ajax({
      url: `https://swapi.co/api/people/${i}`, // La url a la que se le está haciendo la petición.
      contentType: 'application/json', // Tipo de información que se espera de la respuesta.
      method: 'GET', // Especifica si será una petición POST o GET.
      success: function(response) { // Código a ejecutar si la petición es satisfactoria.
        var data = response; // Declarando una variable para respuesta de la petición.
        const characters = // Creando divs con cada personaje y su información.
          `<section class="card col-md-7 col-sm-8 col-xs-10">
          <div class="card-title col-md-12 col-sm-12">
            <h2 class="">${data.name}</h2>
          </div>
          <img id="imgg" class="img-characters swg-6x col-md-4" src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="${data.name}">
          <section class="info col-md-7 col-sm-6 col-xs-12 col-md-offset-2" >
            <article><b>Altura:</b>${data.height}cm</article>
            <article><b>Color cabello:</b>${data.hair_color}</article>
            <article><b>Cumpleaños:</b>${data.birth_year}</article>
            <article class="planet${i}"><b>Planet:</b></article>
          </section>
        </section>`;

        $.ajax({ // Hacemos una petición adicional para el planeta del personaje.
          url: data.homeworld, // La url a la que se le está haciendo la petición.
          contentType: 'application/json', // Tipo de información que se espera de la respuesta.
          method: 'GET', // Especifica si será una petición POST o GET.
          success: function(response) { // Código a ejecutar si la petición es satisfactoria.
            $(`.planet${i}`).html('<b>Planeta:</b>' + response.name); // Mostrando la respuesta.
          }
        });

        container.innerHTML += characters; // Agregando todos los personajes al HTML.
      },
      fail: function(request) { // Código a ejecutar si la petición falla.
        if (request) {
          alert(request.message); // Te muestra el error.
        }
      }
    });
  }
}