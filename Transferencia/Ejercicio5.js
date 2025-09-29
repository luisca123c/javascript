//•	Solicita la distancia de un recorrido (km) y la velocidad promedio (km/h).
//•	Calcula el tiempo estimado del viaje en horas.

//Pedimos al usuario que digite la distancia del recorrido en kilometros y la velocidad promedio en km/h, y los transformamos a float 
let distancia = parseFloat(prompt("Ingrese la distancia del recorrido en kilómetros:"));
let velocidad = parseFloat(prompt("Ingrese la velocidad promedio en km/h:"));
//Calculamos el tiempo estimado del recorrido en horas
let tiempo = parseFloat(distancia / velocidad);
//Mostramos el resultado al usuario
alert("El tiempo estimado del recorrido es: " + tiempo + " horas.");