//•	Solicita un número de minutos.
//•	Convierte a formato: “X horas y Y minutos”.

//Pedimos al usuario que ingrese los minutos a transformar
let minutos = parseInt(prompt("Ingrese los minutos a transformar:"));
//Inicializamos la variable horas en 0
let horas = parseInt(0);
//si los minutos son mayores o iguales a 60, se realiza la conversion
if (minutos >= 60) {
    //Realizamos la conversion de minutos a horas y usamos Math.trunc para redondear hacia abajo
    horas = Math.trunc(minutos / 60);
    //Calculamos los minutos restantes
    minutos = (minutos % 60);
    //Mostramos el resultado al usuario
    alert("El tiempo es: " + horas + " horas y " + minutos + " minutos");
} 
//si los minutos son menores a 60, mostramos el resultado directamente
else {
    alert("El tiempo es menor a una hora");
    alert("El tiempo es: " + minutos + " minutos");
}
