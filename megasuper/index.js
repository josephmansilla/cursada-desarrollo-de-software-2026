// es el main de js
// const { Producto } = require("./domain.js")
import { DescuentoFijo, Producto } from "./domain.js";
import { aumentarPrecioBase } from "./funciones.js";

let unProducto = new Producto("Cocacola", 2500, 3, "Bebida");

const otroProducto = new Producto("MarolioArvejas", 2500, 3, "Enlatado");

console.log("Nombre:" + unProducto.nombre);

const unDescuentoFIjo = new DescuentoFijo(500);
unProducto.agregarDescuento(unDescuentoFIjo);

console.log("precio final: " + unProducto.precioFinal())

const carrito = [unProducto, otroProducto]
aumentarPrecioBase((carrito, 1000))
console.log("Precio nuevo cocacola: " + unProducto.precio);
console.log("Precio nuevo arvejas: " + otroProducto.precio); 