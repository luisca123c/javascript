//•	Solicita el nombre de un producto, su precio y la cantidad comprada.
//•	Calcula el total a pagar.
//•	Muestra: "El total a pagar por [cantidad] [producto] es: [total]".

//Pedimos al usuario que ingrese el nombre del producto, el precio y la cantidad que se compro de este, transformando estos ultimos dos a enteros
let producto = prompt("Ingrese el nombre del producto:");
let precio = parseInt(prompt("Ingrese el precio del producto:"));
let cantidad = parseInt(prompt("Ingrese la cantidad comprada"));
//calculamos el total a pagar
let total_pagar= parseInt(precio*cantidad);
//imprimimos el mensaje
alert("El total a pagar por " + cantidad + " " + producto + " es: " + total_pagar);