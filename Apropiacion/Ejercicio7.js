//•	Solicita un número.
//•	Muestra su doble y su triple.

// Pedimos al usuario que digite un número y lo transformamos en entero
let numero = parseInt(prompt("Ingrese un número:"));
// Calculamos el doble y el triple del número ingresado y los transformamos en enteros
let doble = parseInt(numero * 2);
let triple = parseInt(numero * 3);
// Mostramos el resultado en una alerta
alert("El doble es: " + doble + " El triple es: " + triple);