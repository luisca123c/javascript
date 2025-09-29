//•	Solicita un valor en pesos colombianos.
//•	Convierte a dólares (suponiendo 1 USD = 4000 COP).

// Pedimos al usuario ingresar el valor en pesos colombianos y transformamos el valor a entero
let valor_co = parseInt(prompt("Ingrese el valor en pesos colombianos:"));
// Calculamos el valor en dólares y el resultado lo transformamos a decimal
let valor_usd = parseFloat(valor_co / 4000);
// Mostramos el resultado al usuario
alert("El valor en dolares es: " + valor_usd);
