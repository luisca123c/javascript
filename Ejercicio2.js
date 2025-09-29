//•	Solicita base y altura.
//•	Calcula y muestra el área.


// Pedimos al usuario que ingrese la base del rectángulo y transformamos el valor a entero
let base = parseInt(prompt("Ingrese la base del rectángulo:"));
// Pedimos al usuario que ingrese la altura del rectángulo y transformamos el valor a entero
let altura = parseInt(prompt("Ingrese la altura del rectángulo:"));
// Calculamos el área del rectángulo y el resultado lo transformamos a entero
let area = parseInt(base * altura);
// Mostramos el resultado al usuario
alert("El área del rectángulo es: " + area);