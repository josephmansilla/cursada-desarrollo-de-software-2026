class Producto {

    constructor(nombre, precio, cantidad, categoria) {
        if (categoria === undefined) {
            throw new Error("La categoria debe estar definda");
        }

        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.descuentos = [];
    }

    precioFinal() {
        const precioBaseTotal = this.precio * this.cantidad;
        /*const precioFinal = this.descuentos.reduce(function (
            precioAnterior, 
            descuento,
        ) {
            return precioAnterior - descuento.valorDescontado(this);
        }, precioBaseTotal);*/

        const precioFinal = this.descuentos.reduce((precioAnterior, descuento) => {
            return precioAnterior - descuento.valorDescontado(this);
        })

        return Math.max(0, precioFinal);
    }

    agregarDescuento(nuevoDescuento) {
        this.descuentos.push(nuevoDescuento)
    }

    
}   


export class DescuentoFijo {
    constructor(valor) {
        this.valor = valor;
    }

    valorDescontado(_producto) { //_nombre es una convención para decir que no lo voy a usar
        return this.valor;
    }
}

export class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje = porcentaje; // 20
    }

    valorDescontado(producto) { 
        return (producto.cantidad * producto.precio * this.porcentaje) / 100;
    }
}

