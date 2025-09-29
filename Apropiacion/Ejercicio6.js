//•	Solicita la longitud del lado.
//•	Calcula el perímetro y muéstralo.

// Pedimos al usuario la longitud del lado del cuadrado y transformamos el valor a entero
let long_lado = parseInt(prompt("Ingrese la longitud del lado del cuadrado:"));
// Calculamos el perímetro del cuadrado y el resultado lo transformamos a entero
let perimetro = parseInt(4 * long_lado);
// Mostramos el resultado al usuario
alert("El perímetro del cuadrado es: " + perimetro);