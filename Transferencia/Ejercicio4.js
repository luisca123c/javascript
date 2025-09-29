//•	Solicita la cantidad de kilómetros recorridos y el consumo por kilómetro (litros/km).
//•	Calcula los litros totales consumidos.

//Pedimos al usuario que digite la cantidad de kilometros recorridos y el consumo de litros por kilometro, y los transformamos a float
let kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
let litros = parseFloat(prompt("Ingrese la cantidad de litros que consume por kilometro:"));
//Calculamos el total de litros consumidos en el viaje
let consumido = parseFloat(kilometros * litros);
//Mostramos el resultado al usuario
alert("El total de litros consumidos en el viaje es: " + consumido + " litros.");