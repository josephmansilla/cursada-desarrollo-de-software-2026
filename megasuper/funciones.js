export function aumentarPrecioBase(productos, valor) {
    productos.forEach(element => {
        element.precio = element.precio + valor;
    });

}

export function precioMasAlto(productos) {
    const precios = productos.map((p) => p.precio);
    console.log(precios);
    return Math.max(...precios);
}

export function obtenerProductosMasBaratos(productos, precioTope) {
    return productos.filter((p) => {
        return p.precioTope < p.precioMasAlto;
    });
}

export function obtenerPrecioTotal(productos) {
    return productos.reduce(function(acumulador, producto) {
        return acumulador + producto.precioFinal();
    }, 0);
}

export function ordenarCarrito(productos) {
    productos.sort((p1,p2) => p1.precioFinal() - p2.precioFinal());
}