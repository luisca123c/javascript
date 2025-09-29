//•	Solicita tres calificaciones.
//•	Calcula y muestra el promedio.


// Pedimos al usuario que ingrese tres notas y transformamos el valor a entero
let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));
// Calculamos el promedio sumando las tres notas y dividiendo entre 3 y el resultado lo transformamos a decimal
let prom = parseFloat(nota1 + nota2 + nota3)/3;
// Mostramos el promedio al usuario
alert("El promedio es: " + prom);