//•	Solicita las edades de 4 personas.
//•	Calcula el promedio de edad.

//pedimos al usuario ingresar las edades de 4 personas, convirtiendolas a entero
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona: "));
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona: "));
let edad3 = parseInt(prompt("Ingrese la edad de la tercera persona: "));
let edad4 = parseInt(prompt("Ingrese la edad de la cuarta persona: "));
//calculamos el promedio de edades
let prom = parseFloat((edad1 + edad2 + edad3 + edad4) / 4);
//imprimimos resultados
alert("El promedio de edad es: " + prom);