var apikey='7915c2bad639d7babe825060'
$.ajax({
    method: "GET",       
     url:"https://v6.exchangerate-api.com/v6/7915c2bad639d7babe825060/latest/USD"+ apikey + "/latest/USD",

success: function (respuesta){
    console.log("respuesta de: ", respuesta);
},

error: function(error){
console.error("Error al realizar la solicutud", error);

}


});
