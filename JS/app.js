var edad = prompt('ingresa tu edad: ');

if(edad >= 18)
    return console.log("Acceso permitido");
else
    return console.log("Acceso denegado");


var array = [1,2,3,4,5]

for(var i = 0; i < array.length; i++){
    const num_mayor= Math.max(...array);
    console.log("El numero mayor es: " + num_mayor);
     }