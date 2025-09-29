//•	Solicita el precio de un producto.
//•	Calcula el precio final con un 10% de descuento.

//Pedimos al usuario el precio del producto
let precio =parseInt(prompt("Ingrese el precio del producto:"));
//Calculamos el precio del descuento
let precio_descuento = precio * 0.10;
//Calculamos el precio final
let precio_final = precio - precio_descuento;
//Mostramos el precio final con el descuento
alert("El precio final con el descuento del 10% es: " + precio_final);
alert("Total del descuento: " + precio_descuento);
