//•	Solicita el número de horas trabajadas y el valor por hora.
//•	Calcula el salario semanal.

//pedimos al usuario ingresar las horas trabajadas y el valor de la hora, convirtiendo el numero de horas a float
//ya que puede trabajar 2 horas y media, y el precio de la hora a entero 
let horas = parseFloat(prompt("Ingrese el numero de horas trabajadas en la semana: "));
let precio = parseInt(prompt("Ingrese el precio de la hora: "));
//calculamos el salario semanal
let pago_semana= parseFloat(horas*precio);
//imprimimos resultados
alert("Valor de la hora: " + precio + " Cantidad de horas: " +horas+ " Salario semanal: " + pago_semana);