/// < reference types="jquery" />
//key - "7915c2bad639d7babe825060";

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#convertir").addEventListener('click', function () {


        fetch("https://v6.exchangerate-api.com/v6/7915c2bad639d7babe825060/latest/USD")
            .then(respuesta => respuesta.json())
            .then(respuestasJSON => {
                $('h1').text(`Cambios del dia ${respuestasJSON.time_last_update_utc} en base ${respuestasJSON.base_code}`);

                $("#lista").empty();

                Object.keys(respuestasJSON.conversion_rates).forEach(moneda => {
                    $("#lista").append(`<li>${moneda}: ${respuestasJSON.conversion_rates[moneda]}</li>`);

                });


            })
            .catch(error => {
                console.error('Error al obtener los datos:', error)
                $('h1').text('Error al cargar los datos');
            })
    })
})












