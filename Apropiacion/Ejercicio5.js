//•	Solicita una temperatura en Celsius.
//•	Convierte a Fahrenheit usando la fórmula: F = (C × 9/5) + 32.

// Pedimos al usuario que ingrese la temperatura en Celsius y transformamos el valor a decimal
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
// Calculamos la temperatura en Fahrenheit y el resultado lo transformamos a decimal
let fahrenheit = parseFloat((celsius * 9/5) + 32);
// Mostramos el resultado
alert(celsius + " grados Celsius son: " + fahrenheit + " grados Fahrenheit.");